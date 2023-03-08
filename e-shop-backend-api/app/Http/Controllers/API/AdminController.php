<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    //admin login
    public function adminLogin(Request $request){
        $validatior = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);


        if($validatior->fails()){
            return response()->json([
                'validation_errors' => $validatior->getMessageBag(),
            ]);

        }else{
            $admin = Admin::where('email', $request->email)->first();

            if(! $admin || ! Hash::check($request->password, $admin->password)){
                return response()->json([
                    'status' => 401,
                    'message' => 'invalit credentials please try agin! 🙂'
                ]);
            }else{
                
                $_Token = $admin->createToken($admin->email.'_Token')->plainTextToken;

                return response()->json([
                    'status' => 200,
                    'adminName' => $admin->name,
                    '_Token' => $_Token,
                    'message' => 'Logged In SuccessFull'
                ]);
            }
        }
    }

    public function adminLogout(){
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Logged Out Success'
        ]);
    }
}
