module CoreExtensions::Hash
  def superset?(other)
    [other.to_a - to_a].empty?
  end
end
