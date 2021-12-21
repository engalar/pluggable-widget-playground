# 第一课
```
git clone https://gitee.com/engalar/mendix-pluggable-widget-org-chart.git --depth=1 ./dummy && cd ./dummy && git clone https://gitee.com/engalar/mendix-testproject-800.git --depth=1 ./tests/testProject && rd /s /q .\tests\testProject\.git && xcopy dummy .\tests\testProject /E /Y && start tests/testProject/testProject.mpr
```