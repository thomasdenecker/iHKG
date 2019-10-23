# iHKG

The objective of this repository is to propose the code to reproduce all the analyses proposed in the following paper:

**Inferring two-faced functional sub-networks to highlight iron homeostasis key genes (iHKG) in the pathogenic yeast Candida glabrata** -
Denecker *et al*

To reproduce the analyses, we provide a docker image with Rstudio with Rstudio and all the necessary packages installed :

It is possible to find the complete source code for iHKG viewer hosted at the following address :


## Requirements

We use Docker to develop and run iHKG Rstudio. We invite you to ensure you have
 installed the following requirements before trying to bootstrap the application:

* [Docker 1.12.6+](https://docs.docker.com/engine/installation/)

> We recommend you to follow Docker's official documentations to install
  required docker tools (see links above).

**Docker must be on for the duration of iHKG Rstudio use.**

## Quick start

Did you read the "Requirements" section above?

### Download project

Download the zip file ([here](https://github.com/thomasdenecker/iHKG/archive/master.zip)), extract this file and copy the obtained folder where you want on your computer. Note that if you move the folder, the installation procedure will have to be redone.

**Reminder** : Docker must always be switched on for any installation and use of iHKG code !

### Windows installation

**IMPORTANT** : iHKG project needs Docker. It will only be possible to install on **Windows 10**.

In this folder, you will find a file named INSTALLATION_WINDOWS.bat. By double clicking on it, the installation will begin. This may take a little time depending on the quality of your internet connection. When the installation is completed, a new file will appear. They allow to launch the iHKG Rstudio.

### Mac OsX installation

**In command line**

[Open a terminal](https://www.youtube.com/watch?v=QROX039ckO8) and run these commands:

```
git clone https://github.com/thomasdenecker/iHKG.git
cd iHKG
sudo ./INSTALLATION_MAC.sh
```

The installation will begin. This may take a little time depending on the quality of your internet connection. When the installation is completed, a new file will appear. They allow to launch the iHKG Rstudio. Once the installation is complete, use this command to launch iHKG Rstudio:
```
./iHKG.sh
```

**NOTE**

You can also double click the file iHKG.sh . In this situation a small manipulation is required (only once). In the Finder, right-click the file iHKG.sh and select "Open with" and then "Other...".

You can select the application you want the file to be execute with. In this case it should be the Terminal. To be able to select the Terminal, you have to switch from "Recommended Applications" to "All Applications"  (the Terminal.app application can be found in the Utilities folder).

Check "Always Open With" and after clicking OK you should be able to execute you SHELL script by simply double-clicking it.

### Linux installation

**In command line**

[Open a terminal](https://linuxconfig.org/how-to-open-a-terminal-on-ubuntu-bionic-beaver-18-04-linux) and run these commands:

```
git clone https://github.com/thomasdenecker/iHKG.git
cd iHKG
sudo ./INSTALLATION_LINUX.sh
```

The installation will begin. This may take a little time depending on the quality of your internet connection. When the installation is completed, a new file will appear. They allow to launch the iHKG Rstudio. Once the installation is complete, use this command to launch iHKG Rstudio:

```
sudo ./iHKG.sh
```

### iHKG Rstudio utilisation

Double click on iHKG file (Windows / MacOS X) or launch the command line (Linux / MacOS X) and open your internet browser, typing the following url: http://localhost:8788/ and it should work.

**NOTE** (MAC users) : You may need to repeat the same manipulation as for the installation file (only once).


## Citation
If you use iHKG project, please cite our paper :

**Inferring two-faced functional sub-networks to highlight iron homeostasis key genes (iHKG) in the pathogenic yeast Candida glabrata** -
Denecker *et al*


## Contributing

Please, see the [CONTRIBUTING](CONTRIBUTING.md) file.

## Contributor Code of Conduct

Please note that this project is released with a [Contributor Code of
Conduct](http://contributor-covenant.org/). By participating in this project you
agree to abide by its terms. See [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) file.

## License

iHKG is released under the BSD-3 License. See the bundled [LICENSE](LICENSE)
file for details.
