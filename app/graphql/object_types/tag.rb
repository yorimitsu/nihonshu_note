# frozen_string_literal: true

class ObjectTypes::Tag < Types::BaseObject
  field :id, ID, null: false
  field :name, String, null: false
end
