FROM rocker/verse

## Install Bioconductor package
RUN Rscript -e 'if (!requireNamespace("BiocManager", quietly = TRUE)) install.packages("BiocManager") ; BiocManager::install("RCy3", version = "3.8")'

# Install CRAN package
RUN Rscript -e "install.packages(c('xlsx', 'dplyr', 'VennDiagram', 'ggthemes', 'ggplot2', 'gridExtra', 'grid', 'reshape2', 'ggpubr', 'cowplot'), repos='https://cran.rstudio.com/', dependencies = TRUE)" \
    && rm -rf /tmp/downloaded_packages/ /tmp/*.rds

RUN Rscript -e "install.packages('qgraph', repos='https://cran.rstudio.com/', dependencies = TRUE)" \
        && rm -rf /tmp/downloaded_packages/ /tmp/*.rds

  RUN Rscript -e "install.packages('FactoMineR', repos='https://cran.rstudio.com/', dependencies = TRUE)" \
          && rm -rf /tmp/downloaded_packages/ /tmp/*.rds

RUN Rscript -e "install.packages(c('corrplot', 'ggforce', 'UpSetR', 'waffle', 'psy', 'tm', 'wordcloud', 'factoextra'), repos='https://cran.rstudio.com/', dependencies = TRUE)" \
    && rm -rf /tmp/downloaded_packages/ /tmp/*.rds

RUN R -e "if (!requireNamespace('BiocManager', quietly = TRUE)) install.packages('BiocManager');BiocManager::install('limma')"

RUN Rscript -e "install.packages('readODS', repos='https://cran.rstudio.com/', dependencies = TRUE)" \
    && rm -rf /tmp/downloaded_packages/ /tmp/*.rds
