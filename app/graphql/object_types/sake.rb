# frozen_string_literal: true

class ObjectTypes::Sake < Types::BaseObject
  field :id, ID, null: false
  field :name, String
  field :brand, String
  field :brewery, String
  field :classification, String
  field :main_rice, String
  field :rice_polishing_ratio, String
  field :alcohol_content, String
  field :acidity, String
  field :sake_meter_value, String
  field :flavor_profile, String
  field :description, String
  field :reviews, [ObjectTypes::Review]
end
