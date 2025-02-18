// const { uploadFileToCloudinary } = require("../config/cloudinary");
// const Post = require("../model/Post");
// const LeavePost = require("../model/leavePost");
// const response = require("../utils/responseHandler");




// const createPost = async(req,res) =>{
//     try {
//        // const userId = req.user.userId;

//         const {title,date,description,content} = req.body;
//         const file= req.file;
//         let mediaUrl = null;
//         let mediaType = null;

//         if(file) {
//           const uploadResult = await uploadFileToCloudinary(file)
//           mediaUrl= uploadResult?.secure_url;
//           mediaType= file.mimetype.startsWith('video') ? 'video' : 'image';
//         }
       
//         //create a new post
//         const newPost = await new Post({
//             title,
//             date,
//             description,
//             content,
            
//         })

//         await newPost.save();
//         return response(res,201,'Post created successfully', newPost)

//     } catch (error) {
//          console.log('error creating post',error)
//          return response(res,500, 'Internal server error',error.message)
//     }
// }




// //

// const createleavePost = async(req,res) =>{
//     try {
//        // const userId = req.user.userId;

//         const {startdate,enddate,content} = req.body;
//         const file= req.file;
//         let mediaUrl = null;
//         let mediaType = null;

//         if(file) {
//           const uploadResult = await uploadFileToCloudinary(file)
//           mediaUrl= uploadResult?.secure_url;
//           mediaType= file.mimetype.startsWith('video') ? 'video' : 'image';
//         }
       
//         //create a new post
//         const newPost = await new LeavePost({
//             startdate,
//             enddate,
//             content,
            
//         })

//         await newPost.save();
//         return response(res,201,'Leave Post created successfully', newPost)

//     } catch (error) {
//          console.log('error creating leave post',error)
//          return response(res,500, 'Internal server error',error.message)
//     }
// }



// //get all posts
// const getAllPosts = async(req, res) => {
//     try {
//         const posts = await Post.find()
//         .sort({createdAt: -1})
//         // .populate('user','_id username profilePicture email')
//         // .populate({
//         //     path: 'comments.user',
//         //     select: 'username profilePicture'
//         // })
//         return response(res, 201, 'Get all posts successfully', posts)
//     } catch (error) {
//         console.log('error getting posts',error)
//         return response(res,500,'Internal server error',error.message)
//     }
// }

// //get all leave posts
// const getAllLeavePosts = async(req, res) => {
//     try {
//         const leaveposts = await LeavePost.find()
//         .sort({createdAt: -1})
//         // .populate('user','_id username profilePicture email')
//         // .populate({
//         //     path: 'comments.user',
//         //     select: 'username profilePicture'
//         // })
//         return response(res, 201, 'Get all leave posts successfully', leaveposts)
//     } catch (error) {
//         console.log('error getting leave posts',error)
//         return response(res,500,'Internal server error',error.message)
//     }
// }



// //get post by userId
// const getPostByUserId = async(req, res) => {
//     const {userId} = req.params;
    
//     try {
//         if(!userId){
//             return response(res,400,'UserId is require to get user post')
//         }

//         const posts = await Post.find({user:userId})
//         .sort({createdAt: -1})
//         .populate('user','_id username profilePicture email')
//         .populate({
//             path: 'comments.user',
//             select: 'username, profilePicture'
//         })
//         return response(res, 201, 'Get user post successfully', posts)
//     } catch (error) {
//         console.log('error getting posts',error)
//         return response(res,500,'Internal server error',error.message)
//     }
// }

// //like post api
// const likePost = async(req, res) => {
//     const {postId} = req.params;
//     const userId= req.user.userId;
//     try {
//          const post = await Post.findById(postId)
//          if(!post) {
//             return response(res,404,'post not found')
//          }
//          const hasLiked = post.likes.includes(userId)
//          if(hasLiked){
//             post.likes = post.likes.filter(id => id.toString() !== userId.toString())
//             post.likeCount =  Math.max(0, post.likeCount - 1) ; //ensure llikecount does not go negative
//          }else{
//             post.likes.push(userId)
//             post.likeCount += 1
//          }


//          //save the like in updated post
//          const updatedpost = await post.save()
//          return response(res, 201, hasLiked ? "Post unlike successfully": "post liked successfully", updatedpost )
//     } catch (error) {
//         console.log(error)
//         return response(res,500,'Internal server error',error.message)
//     }
// }

// //post comments by user

// const addCommentToPost = async(req,res) =>{
//     const {postId} = req.params;
//     const userId= req.user.userId;
//     const {text} = req.body;
//     try {
//          const post = await Post.findById(postId)
//          if(!post) {
//             return response(res,404,'post not found')
//          }


//          post.comments.push({user:userId,text})
//          post.commentCount+=1;
          
//          //save the post with new comments
//          await post.save()
//          return response(res, 201, "comments added successfully", post )
//     } catch (error) {
//         console.log(error)
//         return response(res,500,'Internal server error',error.message)
//     }
// }



// //share on post by user
// const sharePost = async(req, res) => {
//     const {postId} = req.params;
//     const userId= req.user.userId;
//     try {
//          const post = await Post.findById(postId)
//          if(!post) {
//             return response(res,404,'post not found')
//          }
//          const hasUserShared = post.share.includes(userId)
//          if(!hasUserShared){
//              post.share.push(userId)
//          }

//          post.shareCount +=1;

//          //save the share in updated post
//           await post.save()
//          return response(res, 201, 'post share successfully', post )
//     } catch (error) {
//         console.log(error)
//         return response(res,500,'Internal server error',error.message)
//     }
// }



// module.exports= {
//     createPost,
//     createleavePost,
//     getAllPosts,
//     getAllLeavePosts
   
// }
const { uploadFileToCloudinary } = require("../config/cloudinary");
const Post = require("../model/Post");
const LeavePost = require("../model/LeavePost");
const response = require("../utils/responseHandler");

// Create a new post
const createPost = async (req, res) => {
    try {
        const { title, date, description, content } = req.body;
        const file = req.file;
        let mediaUrl = null;
        let mediaType = null;

        if (file) {
            const uploadResult = await uploadFileToCloudinary(file);
            mediaUrl = uploadResult?.secure_url;
            mediaType = file.mimetype.startsWith('video') ? 'video' : 'image';
        }

        const newPost = new Post({
            title,
            date,
            description,
            content,
            mediaUrl,
            mediaType
        });

        await newPost.save();
        return response(res, 201, 'Post created successfully', newPost);

    } catch (error) {
        console.log('Error creating post:', error);
        return response(res, 500, 'Internal server error', error.message);
    }
};

// Create a new leave post
const createLeavePost = async (req, res) => {
    try {
        const { startDate, endDate, content } = req.body;
        const file = req.file;
        let mediaUrl = null;
        let mediaType = null;

        if (file) {
            const uploadResult = await uploadFileToCloudinary(file);
            mediaUrl = uploadResult?.secure_url;
            mediaType = file.mimetype.startsWith('video') ? 'video' : 'image';
        }

        const newLeavePost = new LeavePost({
            startDate,
            endDate,
            content,
            mediaUrl,
            mediaType
        });

        await newLeavePost.save();
        return response(res, 201, 'Leave post created successfully', newLeavePost);

    } catch (error) {
        console.log('Error creating leave post:', error);
        return response(res, 500, 'Internal server error', error.message);
    }
};

// Get all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        return response(res, 201, 'Get all posts successfully', posts);
    } catch (error) {
        console.log('Error getting posts:', error);
        return response(res, 500, 'Internal server error', error.message);
    }
};

// Get all leave posts
const getAllLeavePosts = async (req, res) => {
    try {
        const leavePosts = await LeavePost.find().sort({ createdAt: -1 });
        return response(res, 201, 'Get all leave posts successfully', leavePosts);
    } catch (error) {
        console.log('Error getting leave posts:', error);
        return response(res, 500, 'Internal server error', error.message);
    }
};

// Exporting the functions
module.exports = {
    createPost,
    createLeavePost,
    getAllPosts,
    getAllLeavePosts,
};

// Let me know if you want me to add anything else or refine the functionality! 🚀
