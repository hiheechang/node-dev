# Deployment

Github & Heroku

ssh-keygen -t rsa -b 4096 -C "heechang1997@gmail.com" : rsa is protocal

id_rsa : private key
id_rsa.pub : public key

eval "$(ssh-agent -s)" : Agent pid 14620

ssh-add -k ~/.ssh/id_rsa
