# ouvrir power-shell
# installer oh-my-posh
winget install JanDeDobbeleer.OhMyPosh -s winget

# installer posh-git
Install-Module posh-git -Scope CurrentUser

# afficher la version oh-my-posh
oh-my-posh --version
31.3.0

# cree le repertoire des themes
New-Item -ItemType Directory -Path "$env:LOCALAPPDATA\Programs\oh-my-posh\themes" -Force

# telecharger les themes
nvoke-WebRequest https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/themes.zip -OutFile themes.zip

# decompresser les themes
Expand-Archive themes.zip -DestinationPath "$env:LOCALAPPDATA\Programs\oh-my-posh\themes" -Force

# creer un theme personnalise
C:\Users\username\AppData\Local\Programs\oh-my-posh\themes\gerard-minimal.omp.json

# afficher le chemin profil
$PROFILE

# editer le profil
# utiliser un theme
C:\Users\username\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1

===

Import-Module PSReadLine
Import-Module posh-git

$env:POSH_THEMES_PATH = "C:\Users\tiaka\AppData\Local\Programs\oh-my-posh\themes"
$env:POSH_GIT_ENABLED = $true

Set-PSReadLineOption -HistorySaveStyle SaveAtExit

oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\pure.omp.json" | Invoke-Expression
#oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\gerard-minimal.omp.json" | Invoke-Expression
#oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\jandedobbeleer.omp.json" | Invoke-Expression

===
