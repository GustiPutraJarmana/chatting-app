<template>
 <div>
   <div id="roomform">
     <div class="container border rounded mt-5 sm" style="width: 25%; height: 350px; min-width:250px">
     <div class="container head-register border rounded text-center">ini header</div>
     <div class="container border rounded mt-3">
       <form class="form-group-sm">
         <div class="container text-center">
           <h4>Username</h4>
            <p>please create your room</p>
         </div>
         <input type="text" class="form-control"/>
         <div class="container text-right">
         <button class="btn btn-outline-info mt-2" type="submit">create</button>
         </div>
       </form>
      </div>
     </div>
   </div>
    <div id="room">
     <div class="container border rounded mt-5 sm" style="width: 25%; height: 275px; min-width:250px">
     <div class="container border rounded mt-3">
       <form class="form-group-sm">
         <div class="container text-center">
           <h4>Room Name</h4>
            <p>room created by username</p>
         </div>
         <div class="container d-flex flex-row justify-content-around">
         <button class="btn btn-outline-danger mt-2" type="submit">delete</button>
         <button class="btn btn-outline-info mt-2" type="submit" style="width: 72px;">join</button>
         </div>
       </form>
      </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>
