require 'byebug'
class AuthController < ApplicationController

def login
   @user = User.find_by(user_name: params[:user_name], password_digest: params[:password_digest])
    # debugger

    if @user 
        # token = encode_token(user.id)
        session[:user_id]= @user.id
        render json: {user: @user}, status: 200
    else
        render json: {errors: "Username or password incorrect."}
    end
end

end