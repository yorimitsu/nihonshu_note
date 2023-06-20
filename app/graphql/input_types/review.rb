class InputTypes::Review < Types::BaseInputObject
  graphql_name 'ReviewAttributes'

  argument :sake_id, ID, required: true
  argument :comment, String, required: true
  argument :rating, Integer, required: true
end
