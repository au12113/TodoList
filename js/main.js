$(document).ready(() => {
  $('.delete-todo').on('click', (e) => {
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type:'DELETE',
      url: '/todo/delete/'+id,
      success: (response) => {
        confirm("Delete Todo?");
        window.location.href= '/';
      },
      error: (error) => {
        console.log(error);
      }
    });
  });
});
