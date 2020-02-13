require 'byebug'
class UsersController < ApplicationController

    def index
        user = User.all
        render json: user, status: 200
    end

    def create
        @user =User.create(filtered_params)

        session[:user_id] = @user.id
        if @user.valid?
            render json: { user: UserSerializer.new(@user) }, status: :created
        else
            # debugger
            render json: {errors: @user.errors.full_messages}, status: :not_created
        end
    end



    private 

    def filtered_params
        params.require(:user).permit(:first_name, :last_name, :user_name, :password_digest)
    end
end
