class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :first_name, :last_name, :bio, :image

  has_many :items
end
