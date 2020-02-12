class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.text :image_data
      t.string :name
      t.text :descrption
      t.integer :user_id
      
      t.timestamps
    end
  end
end
