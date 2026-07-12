#-------- Node Version Check --------
node --version
# ya short form
node -v

#-------------------- CLI Commands --------------------
node app.js                    # normal run
node --watch app.js            # file change pe auto-restart (Node 18+)
node --inspect app.js          # debugger attach karne ke liye (Chrome DevTools)
node -e "console.log(1+1)"     # ek line ka code direct run karo (eval)
node --check app.js            # syntax check bina run kiye

#--------------------- NPM Commands --------------------
npm init -y                  # naya project setup (package.json banata hai)
npm install express          # ek package install karo
npm install -D nodemon       # dev dependency (sirf development ke liye)
npm install                  # package.json ke saare dependencies install karo
npm uninstall express        # remove karo
npm run dev                  # package.json mein defined custom script chalao
npm list                     # installed packages dekho

#------------
# npx packages ko install kiye bina temporarily run karne ke liye hai — ya kabhi kabhi local installed package ko directly run karne ke liye.

npx create-react-app my-app  # sirf ek baar use hone wala tool, permanent install nahi chahiye
npx nodemon app.js  # agar nodemon locally installed hai, isse chalao

#----- npm install matlab tum ek tool khareed ke apni toolbox mein rakh rahe ho (permanent). npx matlab tum pados wale se ek din ke liye tool udhaar le rahe ho — kaam khatam, wapas.