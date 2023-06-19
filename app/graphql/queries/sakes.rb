module Queries
  class Sakes < Queries::BaseQuery

    type [ObjectTypes::Sake], null: false

    def resolve
      ::Sake.all.order(:id)
    end
  end
end
