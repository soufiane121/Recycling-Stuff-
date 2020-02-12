require "byebug"
class ItemsController < ApplicationController

    include ImageUploader::Attachment(:image_data) 

    def index
        items = Item.all
        render json: items
    end

    def create
        @item = Item.create(image_data: params[:image_data], user_id: params[:user_id])
        render json: @item, status: :created
    end


end
