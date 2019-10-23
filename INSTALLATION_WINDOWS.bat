
docker pull tdenecker/ihkg
echo docker run --name=iHKG_Rstudio -e DISABLE_AUTH=true -v %CD%:/home/rstudio --rm -p 8788:8787 tdenecker/ihkg >> iHKG.bat
