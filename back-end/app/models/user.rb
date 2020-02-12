class User < ApplicationRecord
    has_many :items

    validates :first_name, :last_name, presence: true
    validates :user_name, uniqueness: true
    validates :password_digest, length: { minimum: 3 }
    
    has_secure_password

    # def password=(secret)
  #   self.password_digest = BCrypt::Password.create(secret)
  # end 


  # def authenticate(secret)
  #   BCrypt::Password.new(self.password_digest)  == secret
  # end 
end
