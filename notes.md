# Notes

To connect to AWS terminal
> cd ~/my-aws-key-pairs
> chmod 400 my-ec2-key-pair.pem
> ssh -i my-ec2-key-pair.pem ec2-user@<EC2-INSTANCE-PUBLIC-IP-ADDRESS>

To start docker
> sudo service docker start
> sudo usermod -a -G docker ec2-user
>docker pull name/appname:version
>docker run -p 80:8080 benfranzi/aurora

##### To push docker instances 
> docker push name/appname:version

##### To pull docker on AWS terminal
> docker pull name/appname:version

##### Follow this guide to run Docker on server start
https://docs.docker.com/v17.09/engine/admin/systemd/



## Helpful links
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
http://techgenix.com/namecheap-aws-ec2-linux/
