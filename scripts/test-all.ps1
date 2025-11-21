Write-Host "🧪 Testing components-library..."
Set-Location components-library
yarn test

Write-Host "🧪 Testing mfe-characters..."
Set-Location ../mfe-characters
yarn test
