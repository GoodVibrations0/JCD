var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'jdcdb',
  timezone: 'utc+0'  
});

connection.connect(function(err){
	if(err) throw err;
	console.log(`Sucessfully connected to MySQL database jdcdb`);
});
// probably unused
exports.getUsers = function(req,res){
	connection.query(`SELECT * FROM users WHERE deleted_at IS NULL`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));	  
    });	

}

// authenticate a user logging in req.body has email and password unhashed

exports.authenticate = function(req,res){
    // get login attempt credentials
    let email = req.body.email;
    let passwordPlaintext = req.body.passwordPlaintext;
    var user;
    
    // Authentication Dependencies
    const jwt = require("jsonwebtoken");
    const bcrypt = require("bcrypt");

    // retrieve environment variables
    require("dotenv").config();
    const secretKey = process.env.SECRET_KEY;
    if(!secretKey){
        console.error("SECRET_KEY environment variable was not found, may not be set correctly.")   // console error should be descriptive as I see this
        return res.status(500).json({error:"Server error"});    // http error message should be vague as user sees it
    }

    // get user if there is an email match. OR maybe just return true or false for security
    let query = `SELECT * FROM users WHERE email = ? AND deleted_at IS NULL`;   // use parameterised query like a very smart person who has a solid understanding of both SQL and secure programming
    connection.query(query,[email],function(err,results){
        // Deal with errors first. This might prevent crashing
        if (err) {
            console.error("Error whilst querying database for email match. Are XAMPP and the node.js server running?:", err.message);
            return res.status(500).json({error:"Database error"})   
        }   // case for match not found
        if(results.length === 0) {
            return res.status(401).json({error:"Incorrect credentials"});
        }   //match found, user variable assigned
        user = results[0];

        //hash plaintext password and compare
        bcrypt.compare(passwordPlaintext, user.password, function(err,result){
            if(result){ //  success. generate JWT token 
                console.log("Passwords match. Login success");
                
                const payload = {
                    id: user.id,
                    //email: user.email,
                    username: user.username,
                    //admin: user.admin,
                    //moderator: user.moderator
                }
                const token = jwt.sign(payload, secretKey, {expiresIn: '1h'});
                return res.status(200).json({message:"Login success", token});
            }
            else return res.status(401).json({error:"Incorrect credentials"});
        });
    })
}

exports.editParty = function(req,res){
	let PARTY_MNEMONIC = req.body.PARTY_MNEMONIC;
	let PARTYNAME = req.body.PARTYNAME;
	connection.query(`UPDATE parties SET PARTYNAME = '${PARTYNAME}' WHERE PARTY_MNEMONIC = '${PARTY_MNEMONIC}'`, function(err,rows){
		if (err) throw err;
		res.send(JSON.stringify(rows));
	});
}

