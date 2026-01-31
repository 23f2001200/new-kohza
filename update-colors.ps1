# Color and Font Replacement Script
$filePath = "src\App.jsx"
$content = Get-Content $filePath -Raw

# Replace colors
$content = $content -replace "#F9F9F7", "#fffdf9"
$content = $content -replace "#1A1A1A", "#211f1a"
$content = $content -replace "#FEFEFE", "#ffffff"
$content = $content -replace "249, 249, 247", "255, 253, 249"
$content = $content -replace "rgba\(26, 26, 26", "rgba(33, 31, 26"

# Replace accent colors to burgundy
$content = $content -replace "#3b82f6", "#6f0202"
$content = $content -replace "#ef4444", "#6f0202"
$content = $content -replace "#f59e0b", "#6f0202"
$content = $content -replace "#8b5cf6", "#6f0202"
$content = $content -replace "#10b981", "#6f0202"

# Replace rgba accent colors
$content = $content -replace "rgba\(59, 130, 246", "rgba(111, 2, 2"
$content = $content -replace "rgba\(239, 68, 68", "rgba(111, 2, 2"
$content = $content -replace "rgba\(139, 92, 246", "rgba(111, 2, 2"
$content = $content -replace "rgba\(16, 185, 129", "rgba(111, 2, 2"

# Replace specific color keywords
$content = $content -replace "'white'", "'#ffffff'"
$content = $content -replace ': white,', ': "#ffffff",'
$content = $content -replace 'background: white', 'background: "#ffffff"'

# Replace fonts
$content = $content -replace "Inter, sans-serif", "'Playfair Display', serif"
$content = $content -replace "Inter", "'Playfair Display'"
$content = $content -replace "'serif'", "serif"

# Save
$content | Set-Content $filePath -NoNewline
Write-Host "Replacement complete!"
