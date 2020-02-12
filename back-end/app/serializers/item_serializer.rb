class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_data, :descrption, :user_id

  belongs_to :user
end
