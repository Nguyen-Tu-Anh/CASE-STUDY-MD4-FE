// // let users = window.sessionStorage.getItem("USER_KEY");
//
// // $(document).ready(function () {
// //     getProfileUser()
// // })
//
// // function getProfileUser() {
// //     console.log(users)
// //     let name = user.name;
// //     let username = user.username;
// //     let email = user.email;
// //     let id = user.id;
// //     let img = document.getElementById("imgDiv");
// //     let img1 = document.getElementById("imgDiv1");
// //     img.src = user.avatar;
// //     img1.src = user.avatar;
// //
// //     document.getElementById("fullName").value = name;
// //     document.getElementById("usernameee").value = username;
// //     document.getElementById("email").value = email;
// //     document.getElementById("id").value = id;
// // }
//
// const firebaseConfig = {
//     apiKey: "AIzaSyDAcVDY54CgLrMsF62GM1UJt79U5YwUKMI",
//     authDomain: "case-study-md4.firebaseapp.com",
//     projectId: "case-study-md4",
//     storageBucket: "case-study-md4.appspot.com",
//     messagingSenderId: "1075801629660",
//     appId: "1:1075801629660:web:ff596cc3eb33c2f37da519",
//     measurementId: "G-VJFQG43GD9"
// };
//
// firebase.initializeApp(firebaseConfig);
//
// let srcImg;
// var image = '';
// // firebase bucket name
// // REPLACE WITH THE ONE YOU CREATE
// // ALSO CHECK STORAGE RULES IN FIREBASE CONSOLE
// var fbBucketName = 'images';
//
// // get elements
// var uploader = document.getElementById('uploader');
// var fileButton = document.getElementById('fileButton');
//
// // listen for file selection
// fileButton.addEventListener('change', function (e) {
//
//     // what happened
//     console.log('file upload event', e);
//
//     // get file
//     var file = e.target.files[0];
//
//     // create a storage ref
//     var storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
//
//     // upload file
//     var uploadTask = storageRef.put(file);
//
//     // The part below is largely copy-pasted from the 'Full Example' section from
//     // https://firebase.google.com/docs/storage/web/upload-files
//
//     // update progress bar
//     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
//         function (snapshot) {
//             // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//             // var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             // uploader.value = progress;
//             // console.log('Upload is ' + progress + '% done');
//             switch (snapshot.state) {
//                 case firebase.storage.TaskState.PAUSED: // or 'paused'
//                     console.log('Upload is paused');
//                     break;
//                 case firebase.storage.TaskState.RUNNING: // or 'running'
//                     console.log('Upload is running');
//                     break;
//             }
//         }, function (error) {
//
//             // A full list of error codes is available at
//             // https://firebase.google.com/docs/storage/web/handle-errors
//             switch (error.code) {
//                 case 'storage/unauthorized':
//                     // User doesn't have permission to access the object
//                     break;
//
//                 case 'storage/canceled':
//                     // User canceled the upload
//                     break;
//
//                 case 'storage/unknown':
//                     // Unknown error occurred, inspect error.serverResponse
//                     break;
//             }
//         }, function () {
//             // Upload completed successfully, now we can get the download URL
//             // save this link somewhere, e.g. put it in an input field
//             var downloadURL = uploadTask.snapshot.downloadURL;
//             // image = downloadURL;
//             console.log('downloadURL ===>', downloadURL);
//             let img = document.getElementById("imgDiv");
//             img.src = downloadURL
//             srcImg = downloadURL
//             console.log('pic ==', downloadURL)
//         });
//
// });
//
// // function editUserProfile() {
// //     let id = document.getElementById("id").value;
// //     let name = document.getElementById("fullName").value;
// //     let avatar = document.getElementById("imgDiv").src;
// //     let username = document.getElementById("usernameee").value;
// //     let email = document.getElementById("email").value;
// //     let password = document.getElementById("passwordEdit").value;
// //
// //     let user = {
// //         'id': id,
// //         'name': name,
// //         'avatar': avatar,
// //         'username': username,
// //         'email': email,
// //         'password': password
// //     }
// //
// //     $.ajax({
// //         type: "PUT",
// //         headers: {
// //             'Accept': 'application/json',
// //             'Content-Type': 'application/json'
// //         },
// //         url: "http://localhost:8080/users/" + id,
// //         data: JSON.stringify(user),
// //         //xử lý khi thành công
// //         success: function (data) {
// //             window.sessionStorage.removeItem("USER_KEY")
// //             window.sessionStorage.setItem("USER_KEY", JSON.stringify(data))
// //             window.location.href = 'profileUser.html';
// //             alert("Edit Success!")
// //         },
// //         error: function (err) {
// //             console.log(err)
// //         }
// //     })
// // }
//
