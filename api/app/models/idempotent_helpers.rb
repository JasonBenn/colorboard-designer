module IdempotentHelpers
  def update_or_create(options)
    id = options.delete('id')
    record = nil
    ActiveRecord::Base.transaction do
      record = find_or_create_by(id: id)
      no_update_needed = record.as_json.superset? options.as_json
      record.update(options) unless no_update_needed
    end
    record
  end
end
