<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:191',
            'email' => 'required|email|max:191|unique:users,email',
            'password' => 'required|min:4',
        ]);

        $userAgent = $request->header('User-Agent');
        $device = $this->getDevice($userAgent);
        $browser = $this->getBrowser($userAgent);
        $platform = $this->getPlatform($userAgent);


        if($validator->fails()){
            return response()->json([
                'status' => 401,
                'validation_error' => $validator->getMessageBag(),
            ]);
            
        }else{

            $user = new User();
            $user->name = $request->post('name');
            $user->email = $request->post('email');
            $user->password = Hash::make( $request->post('password') );
            $user->user_ip = $request->ip();
            $user->user_device = $device;
            $user->user_browser = $browser;
            $user->user_platform = $platform;
            $user->save();

            $_Token = $user->createToken($user->email.'_Token')->plainTextToken;

            return response()->json([
                'status' => 200,
                'username' => $user->name,
                '_Token' => $_Token,
                'message' => 'Registration SuccessFull'
            ]);

        }
    }

    //user agent detect
    private function getDevice($userAgent)
    {
        $pattern = '/\b(ip(hone|od|ad)|android|opera m(ob|in)i|windows (phone|ce)|blackberry|tablet|kindle|silk)\b/i';

        if (preg_match($pattern, strtolower($userAgent), $match)) {
            return $match[0];
        }

        return 'Unknown device';
    }

    private function getBrowser($userAgent)
    {
        $pattern = '#(?P<browser>[\w]+)/(?P<version>[\w.]+)#';

        if (preg_match_all($pattern, $userAgent, $matches)) {
            $browser = end($matches['browser']);
            $version = end($matches['version']);

            return $browser . ' ' . $version;
        }

        return 'Unknown browser';
    }

    private function getPlatform($userAgent)
    {
        $pattern = '/\((.*?)\)/';
    
        if (preg_match($pattern, $userAgent, $matches)) {
            $platform = $matches[1];
    
            if (stripos($platform, 'Windows NT 10') !== false) {
                return 'Windows 10';
            } elseif (stripos($platform, 'Windows NT 6.3') !== false) {
                return 'Windows 8.1';
            } elseif (stripos($platform, 'Windows NT 6.2') !== false) {
                return 'Windows 8';
            } elseif (stripos($platform, 'Windows NT 6.1') !== false) {
                return 'Windows 7';
            } elseif (stripos($platform, 'Windows NT 6.0') !== false) {
                return 'Windows Vista';
            } elseif (stripos($platform, 'Windows NT 5.1') !== false) {
                return 'Windows XP';
            } elseif (stripos($platform, 'linux') !== false) {
                return 'Linux';
            } elseif (stripos($platform, 'Macintosh') !== false) {
                return 'macOS';
            } elseif (stripos($platform, 'iPhone') !== false) {
                return 'iOS';
            } elseif (stripos($platform, 'iPad') !== false) {
                return 'iOS';
            } elseif (stripos($platform, 'Android') !== false) {
                return 'Android';
            } else {
                return $platform;
            }
        }
    
        return 'Unknown platform';
    }

    //user login
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:191',
            'password' => 'required|min:4',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 401,
                'validation_error' => $validator->getMessageBag(),
            ]);
        }else{

            $userIpValidation = User::where('user_ip', $request->ip())->first();

            if($userIpValidation){

                $userLogin = User::where('email', $request->post('email'))->first();

                if(! $userLogin || ! Hash::check($request->post('password'), $userLogin->password)){
                    return response()->json([
                        'status' => 402,
                        'validation' => 'Invalit Credential',
                    ]);

                }else{
    
                    $_Token = $userLogin->createToken($userLogin->email.'_Token')->plainTextToken;
    
                    return response()->json([
                        'status' => 200,
                        'username' => $userLogin->name,
                        '_Token' => $_Token,
                        'message' => 'Login SuccessFull'
                    ]);
                }

            }else{

                return response()->json([
                    'status' => 402,
                    'validation' => 'Unindentified network',
                ]);
            }

        }
    }

    //user logout
    public function userLogout(){
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Logged Out Success'
        ]);
    }
}
