#HOW TO USE GIT

nese jemi duke perdorur nje pc te re, fillimisht duhet te konfigurojme accountin, me ane te komandave:

git config --global user.name "Bera344"
git config --global user.email "bturtulla@gmail.com"


Fillimisht krijoni nje repository ne GitHub

Ia nisim projektit me ane te komandes:

git init


I selektojme te gjitha files me ane te komandes:
git add -A


Nese deshironi te dregoni vetem nje file te caktuar atehere perdorni komanden :

git add filename.js


Nese deshironi te kontrolloni gjendjen e file qe jane edituar(ndryshuar, modifikuar), perdorni komanden:

git status


Pasi jemi gati me modifikim e dergojme projektin (fotografimin e projektit dhe mesazhin qe tregon cka eshte modifikuar):

git commit -m "message..."


E lidhim projektin tone loklisht me repositoryin ne GitHub, me ane te komandes, qe e marrim copy-paste nga GitHub:

git remote add origin "https://github/Bera344/weatheApp"...




Ne fund i dergojme me origin master:

git push origin master