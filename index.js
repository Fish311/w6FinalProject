$('#submitComment').on('click', function (){
    let userName = $('#displayName').val();
    let userComment = $('#comment').val();
        $('#commentSection').append(`
        <div class="commentContainer">
            <div id="image">
                <img id="accountPic" src="images/accountPicture.png">
            </div>
            <div class="spaceDiv">
                <div id="nameEditDelete">
                     <p class="displayName2">${userName}</p>
                    <div id="editDelete">
                        <div id="editPost">Edit</div>
                        <div id="deletePost">Delete</div>
                    </div>
                </div>
                <h2 class="comment2">${userComment}</h2>
                <div id="hiddenDiv" class="displayNone">
                    <input type="text" id="editComment" value="${userComment}">
                    <div id="resubmit">Submit</div>
                </div>
            </div>
        </div>
        `);
});
 $('#commentSection').on('click', '#editPost', function () {
    let editBox = $(this).parents()[1];
    let editThis = $(editBox).next().next();
    $(editThis).toggleClass('displayNone');
 });
$('#commentSection').on('click', '#deletePost', function () {
    console.log("made it");
   let removeThis = $(this).parents()[3];
   $(removeThis).remove();
});
$('#commentSection').on('click', '#resubmit', function () {
    let newComment = $(this).prev().val();
    console.log(newComment);
    let firstParent = $(this).parents()[0];
    let prevSibling = $(firstParent).prev();
    $(prevSibling).text(`${newComment}`);
});
