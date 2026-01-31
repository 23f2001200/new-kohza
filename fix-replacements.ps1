$filePath = "src\App.jsx"
$content = Get-Content $filePath -Raw

# Fix broken replacements
$content = $content -replace "'Playfair Display'net", "internet"
$content = $content -replace "po'Playfair Display'Events", "pointerEvents"

# Save
$content | Set-Content $filePath -NoNewline
Write-Host "Fixed broken replacements!"
