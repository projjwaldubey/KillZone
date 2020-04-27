
var sgnup=document.getElementById('sgnupId');
sgnup.addEventListener('click',MySignUp);

function MySignUp() {

  alert("Hello Honey!!!");

  var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18',region: 'ap-southeast-2'});
  
  // var params = {
  //   ClientId: '22rut63u3q49l83edqc45ojq62', /* required */
  //   Password: 'Honey123$', /* required */
  //   Username: 'charu.m14', /* required */
  //   // AnalyticsMetadata: {
  //   //   AnalyticsEndpointId: 'STRING_VALUE'
  //   // },
  //   // SecretHash: 'd9f1idqb950l224a1ol0cn6e2ulraptn5ueqb308p4r0fc1unlo',
  //   UserAttributes: [
  //     {
  //       Name: 'email', /* required */
  //       Value: 'projjwaldubey@gmail.com'
  //     },

  //     {
  //       Name: 'name', /* required */
  //       Value: 'charu'
  //     },
  //     /* more items */
  //   ],
  //   // UserContextData: {
  //   //   EncodedData: 'STRING_VALUE'
  //   // },
  //   // ValidationData: [
  //   //   {
  //   //     Name: 'STRING_VALUE', /* required */
  //   //     Value: 'STRING_VALUE'
  //   //   },
  //   //   /* more items */
  //   // ]
  // };
  // response= cognitoidentityserviceprovider.signUp(params, function(err, data) {
  //   if (err) console.log(err, err.stack); // an error occurred
  //   else     console.log(data);           // successful response
  // });

  // console.log(response);

  var params = {
    ClientId: '22rut63u3q49l83edqc45ojq62',
    ConfirmationCode: '797026',
    Username: 'charu.m14', 
  };
    

  cognitoidentityserviceprovider.confirmSignUp(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
  

  

};


