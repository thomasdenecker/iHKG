#!/bin/bash

docker pull tdenecker/ihkg

BASEDIR=$(pwd)
echo "$BASEDIR"

echo '#!/bin/bash' > $BASEDIR/iHKG.sh
echo 'docker run --name=iHKG_Rstudio -e DISABLE_AUTH=true -v' $BASEDIR':/home/rstudio --rm -p 8788:8787 tdenecker/ihkg' >> $BASEDIR/iHKG.sh

chmod +x $BASEDIR/iHKG.sh
