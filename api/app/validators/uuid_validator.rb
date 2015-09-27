class UuidValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    unless value =~ /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
      record.errors[attribute] << "#{attribute} must be a valid UUID"
    end
  end
end
