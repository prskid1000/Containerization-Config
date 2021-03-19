FROM ubuntu:16.04

RUN apt-get update
RUN apt-get install -y openssh-server

RUN mkdir /var/run/sshd
RUN echo 'root:1234' | chpasswd
RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

RUN apt-get install npm -y
RUN apt-get install apache2 -y
RUN apt-get install nano -y
RUN apt-get install nodejs -y
RUN apache2ctl start
RUN npm -v
EXPOSE 22 80 3000
CMD ["/usr/sbin/sshd", "-D"]