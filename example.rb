require 'http'

response = HTTP.get("http://localhost:3000/api/recipes")
p response.parse