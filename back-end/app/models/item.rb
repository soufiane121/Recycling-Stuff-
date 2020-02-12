class Item < ApplicationRecord
    belongs_to :user
    validates :image_data, :name, :descrption, presence: true

end
