[System.Reflection.Assembly]::LoadWithPartialName('System.Drawing')
$img = [System.Drawing.Image]::FromFile('c:\Users\HP\Downloads\jawanexis-Home-main\jawanexis-Home-main\src\assets\hr-students-blazers.png')
Write-Output ("Width: " + $img.Width + ", Height: " + $img.Height)
