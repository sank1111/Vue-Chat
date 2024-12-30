<script setup>
import { useFriendStore } from '@/stores/messengerStore/friendList';
import { onMounted, ref, watch, watchEffect } from 'vue';
import Setting from './Setting.vue';

const friendStore = useFriendStore();

// Fetch user data from API
onMounted(async () => {
    await friendStore.getAllfriends();
    // watch(() => friendStore.friends, (newFriends) => {
    //     console.log(newFriends);
    // })
});





// Function to generate a dummy avatar with initials
function getDummyAvatar(friend) {
    const initials = friend.firstName.charAt(0) + friend.lastName.charAt(0);  // Create initials from first and last name
    return `https://ui-avatars.com/api/?name=${initials}&background=random&color=fff`;
}





</script>



<template>
    <div class="chat-leftsidebar">
        <div class="tab-content">
            <!-- Start Profile tab-pane -->
            <div class="tab-pane" id="pills-user" role="tabpanel" aria-labelledby="pills-user-tab">
                <!-- Start profile content -->
                <div>
                    <div class="user-profile-img">
                        <img src="/assets/images/4902908.jpg" class="profile-img" style="height: 160px;" alt="">
                        <div class="overlay-content">
                            <div>
                                <div class="user-chat-nav p-2 ps-3">

                                    <div class="d-flex w-100 align-items-center">
                                        <div class="flex-grow-1">
                                            <h5 class="text-white mb-0">My Profile</h5>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="dropdown">
                                                <button class="btn nav-btn text-white dropdown-toggle" type="button"
                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    <i class='bx bx-dots-vertical-rounded'></i>
                                                </button>
                                                <div class="dropdown-menu dropdown-menu-end">
                                                    <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                        href="#">Info
                                                        <i class="bx bx-info-circle ms-2 text-muted"></i></a>
                                                    <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                        href="#">Setting
                                                        <i class="bx bx-cog text-muted ms-2"></i></a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                        href="#">Help
                                                        <i class="bx bx-help-circle ms-2 text-muted"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-center border-bottom border-bottom-dashed pt-2 pb-4 mt-n5 position-relative">
                        <div class="mb-lg-3 mb-2">
                            <img src="/assets/images/users/avatar-1.jpg" class="rounded-circle avatar-lg img-thumbnail"
                                alt="">
                        </div>

                        <h5 class="fs-17 mb-1 text-truncate">Dushane Daniel</h5>
                        <p class="text-muted fs-14 text-truncate mb-0">Front end Developer</p>
                    </div>
                    <!-- End profile user -->

                    <!-- Start user-profile-desc -->
                    <div class="p-4 profile-desc" data-simplebar>
                        <div class="text-muted">
                            <p class="mb-3">A professional profile is an introductory section on your resume that
                                highlights your
                                relevant qualifications and skills.</p>
                        </div>

                        <div class="border-bottom border-bottom-dashed mb-4 pb-2">
                            <div class="d-flex py-2 align-items-center">
                                <div class="flex-shrink-0 me-3">
                                    <i class="bx bx-user align-middle text-muted fs-19"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <p class="mb-0">Dushane Daniel</p>
                                </div>
                            </div>

                            <div class="d-flex py-2 align-items-center">
                                <div class="flex-shrink-0 me-3">
                                    <i class="ri-phone-line align-middle text-muted fs-19"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <p class="mb-0">+(365) 1456 12584</p>
                                </div>
                            </div>

                            <div class="d-flex py-2 align-items-center">
                                <div class="flex-shrink-0 me-3">
                                    <i class="ri-message-2-line align-middle text-muted fs-19"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <p class="fw-medium mb-0">dushanedaniel@gmail.com</p>
                                </div>
                            </div>

                            <div class="d-flex py-2 align-items-center">
                                <div class="flex-shrink-0 me-3">
                                    <i class="ri-map-pin-2-line align-middle text-muted fs-19"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <p class="mb-0">California, USA</p>
                                </div>
                            </div>
                        </div>

                        <div class="border-bottom border-bottom-dashed mb-4 pb-4">
                            <div class="d-flex align-items-center mb-3">
                                <div class="flex-grow-1">
                                    <h5 class="fs-12 text-muted text-uppercase mb-0">Media</h5>
                                </div>
                                <div class="flex-shrink-0">
                                    <a href="#" class="fw-medium fs-12 d-block">Show all</a>
                                </div>
                            </div>
                            <div class="profile-media-img">
                                <div class="media-img-list">
                                    <a href="#">
                                        <img src="/assets/images/small/img-1.jpg" alt="media img" class="img-fluid">
                                    </a>
                                </div>
                                <div class="media-img-list">
                                    <a href="#">
                                        <img src="/assets/images/small/img-2.jpg" alt="media img" class="img-fluid">
                                    </a>
                                </div>
                                <div class="media-img-list">
                                    <a href="#">
                                        <img src="/assets/images/small/img-4.jpg" alt="media img" class="img-fluid">
                                        <div class="bg-overlay">+ 15</div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="d-flex align-items-center mb-3">
                                <div class="flex-grow-1">
                                    <h5 class="fs-12 text-muted text-uppercase mb-0">Attached Files</h5>
                                </div>
                                <div class="flex-shrink-0">
                                    <a href="#" class="fw-medium fs-12 d-block">Show all</a>
                                </div>
                            </div>
                            <div>
                                <div class="card p-2 border border-dashed mb-2">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0 ms-1 me-3">
                                            <img src="/assets/images/pdf-file.png" alt="" class="avatar-xs">
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h5 class="fs-14 text-truncate mb-1">design-phase-1-approved.pdf</h5>
                                            <p class="text-muted fs-13 mb-0">12.5 MB</p>
                                        </div>

                                        <div class="flex-shrink-0 ms-3">
                                            <div class="d-flex gap-2">
                                                <div>
                                                    <a href="#" class="text-muted px-1">
                                                        <i class="bx bxs-download"></i>
                                                    </a>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="dropdown-toggle text-muted px-1" href="#" role="button"
                                                        data-bs-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <i class="bx bx-dots-horizontal-rounded"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end">
                                                        <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                            href="#">Share
                                                            <i class="bx bx-share-alt ms-2 text-muted"></i></a>
                                                        <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                            href="#">Bookmark <i
                                                                class="bx bx-bookmarks text-muted ms-2"></i></a>
                                                        <div class="dropdown-divider"></div>
                                                        <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                            href="#">Delete
                                                            <i class="bx bx-trash ms-2 text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card p-2 border border-dashed mb-2">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0 ms-1 me-3">
                                            <img src="/assets/images/image-file.png" alt="" class="avatar-xs">
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h5 class="fs-14 text-truncate mb-1">Image-1.jpg</h5>
                                            <p class="text-muted fs-13 mb-0">4.2 MB</p>
                                        </div>

                                        <div class="flex-shrink-0 ms-3">
                                            <div class="d-flex gap-2">
                                                <div>
                                                    <a href="#" class="text-muted px-1">
                                                        <i class="bx bxs-download"></i>
                                                    </a>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="dropdown-toggle text-muted px-1" href="#" role="button"
                                                        data-bs-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <i class="bx bx-dots-horizontal-rounded"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end">
                                                        <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                            href="#">Share
                                                            <i class="bx bx-share-alt ms-2 text-muted"></i></a>
                                                        <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                            href="#">Bookmark <i
                                                                class="bx bx-bookmarks text-muted ms-2"></i></a>
                                                        <div class="dropdown-divider"></div>
                                                        <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                            href="#">Delete
                                                            <i class="bx bx-trash ms-2 text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card p-2 border border-dashed mb-2">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0 ms-1 me-3">
                                            <img src="/assets/images/image-file.png" alt="" class="avatar-xs">
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h5 class="fs-14 text-truncate mb-1">Image-2.jpg</h5>
                                            <p class="text-muted fs-13 mb-0">3.1 MB</p>
                                        </div>

                                        <div class="flex-shrink-0 ms-3">
                                            <div class="d-flex gap-2">
                                                <div>
                                                    <a href="#" class="text-muted px-1">
                                                        <i class="bx bxs-download"></i>
                                                    </a>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="dropdown-toggle text-muted px-1" href="#" role="button"
                                                        data-bs-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <i class="bx bx-dots-horizontal-rounded"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end">
                                                        <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                            href="#">Share
                                                            <i class="bx bx-share-alt ms-2 text-muted"></i></a>
                                                        <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                            href="#">Bookmark <i
                                                                class="bx bx-bookmarks text-muted ms-2"></i></a>
                                                        <div class="dropdown-divider"></div>
                                                        <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                            href="#">Delete
                                                            <i class="bx bx-trash ms-2 text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card p-2 border border-dashed mb-0">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0 ms-1 me-3">
                                            <img src="/assets/images/zip-file.png" alt="" class="avatar-xs">
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h5 class="fs-14 text-truncate mb-1">Landing-A.zip</h5>
                                            <p class="text-muted fs-13 mb-0">6.7 MB</p>
                                        </div>

                                        <div class="flex-shrink-0 ms-3">
                                            <div class="d-flex gap-2">
                                                <div>
                                                    <a href="#" class="text-muted px-1">
                                                        <i class="bx bxs-download"></i>
                                                    </a>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="dropdown-toggle text-muted px-1" href="#" role="button"
                                                        data-bs-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <i class="bx bx-dots-horizontal-rounded"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end">
                                                        <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                            href="#">Share
                                                            <i class="bx bx-share-alt ms-2 text-muted"></i></a>
                                                        <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                            href="#">Bookmark <i
                                                                class="bx bx-bookmarks text-muted ms-2"></i></a>
                                                        <div class="dropdown-divider"></div>
                                                        <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                            href="#">Delete
                                                            <i class="bx bx-trash ms-2 text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- end user-profile-desc -->
                </div>
                <!-- End profile content -->
            </div>
            <!-- End Profile tab-pane -->

            <!-- Start chats tab-pane -->
            <div class="tab-pane show active" id="pills-chat" role="tabpanel" aria-labelledby="pills-chat-tab">
                <!-- Start chats content -->
                <div>
                    <div class="px-4 pt-4">
                        <div class="d-flex align-items-start">
                            <div class="flex-grow-1">
                                <h4 class="mb-4">Messages <span class="text-primary fs-13">(128)</span></h4>
                            </div>
                        </div>
                        <form>
                            <div class="input-group search-panel mb-3">
                                <input type="text" class="form-control bg-light border-0" id="searchChatUser"
                                    onkeyup="searchUser()" placeholder="Search here..."
                                    aria-label="Example text with button addon" aria-describedby="searchbtn-addon"
                                    autocomplete="off">
                                <button class="btn btn-light p-0" type="button" id="searchbtn-addon"><i
                                        class='bx bx-search align-middle'></i></button>
                            </div>
                        </form>
                    </div> <!-- .p-4 -->

                    <div class="chat-room-list" data-simplebar>
                        <!-- Start chat-message-list -->
                        <h5 class="mb-3 px-4 mt-4 fs-11 text-muted text-uppercase">Friends</h5>
                        <div class="chat-container">
                            <div v-for="friend in friendStore.friendList" :key="friend.id"
                                @click="friendStore.getFriendInfo(friend)" class="chat-message-item">
                                <div class="avatar">
                                    <!-- If friend has avatarUrl, show it, otherwise show a dummy avatar -->
                                    <img :src="friend.avatarUrl || getDummyAvatar(friend)" alt="Avatar" />
                                </div>
                                <div class="message-content">
                                    <div class="friend-name">
                                        {{ friend.firstName }} {{ friend.lastName }}
                                    </div>
                                    <div class="friend-status">
                                        <span
                                            :class="{ 'online': friend.status === 'online', 'offline': friend.status !== 'online' }">
                                            {{ friend.status === 'online' ? 'Online' : 'Offline' }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-center px-4 mt-5 mb-2">
                            <div class="flex-grow-1">
                                <h4 class="mb-0 fs-11 text-muted text-uppercase">Direct Messages</h4>
                            </div>
                            <div class="flex-shrink-0">
                                <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top"
                                    title="New Message">

                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal"
                                        data-bs-target=".contactModal">
                                        <i class="bx bx-plus align-middle"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="chat-message-list">

                            <ul class="list-unstyled chat-list chat-user-list" id="usersList">
                            </ul>
                        </div>

                        <div class="d-flex align-items-center px-4 mt-5 mb-2">
                            <div class="flex-grow-1">
                                <h4 class="mb-0 fs-11 text-muted text-uppercase">Channels</h4>
                            </div>
                            <div class="flex-shrink-0">
                                <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top"
                                    title="Create group">

                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal"
                                        data-bs-target="#addgroup-exampleModal">
                                        <i class="bx bx-plus align-middle"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="chat-message-list">

                            <ul class="list-unstyled chat-list chat-user-list mb-3" id="channelList">
                            </ul>
                        </div>
                        <!-- End chat-message-list -->
                    </div>

                </div>
                <!-- Start chats content -->
            </div>
            <!-- End chats tab-pane -->

            <!-- Start contacts tab-pane -->
            <div class="tab-pane" id="pills-contacts" role="tabpanel" aria-labelledby="pills-contacts-tab">
                <!-- Start Contact content -->
                <div>
                    <div class="px-4 pt-4">
                        <div class="d-flex align-items-start">
                            <div class="flex-grow-1">
                                <h4 class="mb-4">Contacts</h4>
                            </div>
                            <div class="flex-shrink-0">
                                <div>
                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-soft-success btn-sm" data-bs-toggle="modal"
                                        data-bs-target="#addContact-exampleModal">
                                        <i class="bx bx-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <form>
                            <div class="input-group search-panel mb-4">
                                <input type="text" class="form-control bg-light border-0" id="searchContact"
                                    onkeyup="searchContacts()" placeholder="Search contacts..."
                                    aria-label="Search Contacts..." aria-describedby="button-searchcontactsaddon"
                                    autocomplete="off">
                                <button class="btn btn-light p-0" type="button" id="button-searchcontactsaddon"><i
                                        class='bx bx-search align-middle'></i></button>
                            </div>
                        </form>
                    </div>
                    <!-- end p-4 -->

                    <div class="chat-message-list chat-group-list" data-simplebar>
                        <div class="sort-contact">
                        </div>
                    </div>
                    <!-- end contact lists -->
                </div>
                <!-- Start Contact content -->
            </div>
            <!-- End contacts tab-pane -->

            <!-- Start calls tab-pane -->
            <div class="tab-pane" id="pills-calls" role="tabpanel" aria-labelledby="pills-calls-tab">
                <!-- Start Contact content -->
                <div>
                    <div class="px-4 pt-4">
                        <div class="d-flex align-items-start">
                            <div class="flex-grow-1">
                                <h4 class="mb-3">Calls</h4>
                            </div>
                        </div>
                    </div>
                    <!-- end p-4 -->

                    <!-- Start contact lists -->
                    <div class="chat-message-list chat-call-list" data-simplebar>
                        <ul class="list-unstyled chat-list" id="callList">

                        </ul>
                    </div>
                    <!-- end contact lists -->
                </div>
                <!-- Start Contact content -->
            </div>
            <!-- End calls tab-pane -->

            <!-- Start bookmark tab-pane -->
            <div class="tab-pane" id="pills-bookmark" role="tabpanel" aria-labelledby="pills-bookmark-tab">
                <!-- Start Contact content -->
                <div>
                    <div class="px-4 pt-4">
                        <div class="d-flex align-items-start">
                            <div class="flex-grow-1">
                                <h4 class="mb-3">Bookmark</h4>
                            </div>
                        </div>
                        <form>
                            <div class="input-group search-panel mb-3">
                                <input type="text" class="form-control bg-light border-0" id="searchbookmark"
                                    onkeyup="searchBookmark()" placeholder="Search here..."
                                    aria-label="Example text with button addon" aria-describedby="searchbookmark-addon"
                                    autocomplete="off">
                                <button class="btn btn-light p-0" type="button" id="searchbookmark-addon"><i
                                        class='bx bx-search align-middle'></i></button>
                            </div>
                        </form>
                    </div>
                    <!-- end p-4 -->

                    <!-- Start contact lists -->
                    <div class="chat-message-list chat-bookmark-list" id="chat-bookmark-list" data-simplebar>
                        <ul class="list-unstyled chat-list">
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 ms-1 me-3">
                                        <img src="/assets/images/pdf-file.png" alt="" class="avatar-xs">
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-14 mb-1"><a href="#"
                                                class="text-truncate p-0">design-phase-1-approved.pdf</a>
                                        </h5>
                                        <p class="text-muted text-truncate fs-13 mb-0">12.5 MB</p>
                                    </div>

                                    <div class="flex-shrink-0 ms-3">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle fs-16 text-muted px-1" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Open
                                                    <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Edit
                                                    <i class="bx bx-pencil ms-2 text-muted"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Delete
                                                    <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 ms-1 me-3">
                                        <img src="/assets/images/link-file.png" alt="" class="avatar-xs">
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-14 mb-1"><a href="#" class="text-truncate p-0">Bg Pattern</a></h5>
                                        <p class="text-muted text-truncate fs-13 mb-0">https://bgpattern.com/</p>
                                    </div>

                                    <div class="flex-shrink-0 ms-3">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle fs-18 text-muted px-1" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Open
                                                    <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Edit
                                                    <i class="bx bx-pencil ms-2 text-muted"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Delete
                                                    <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 ms-1 me-3">
                                        <img src="/assets/images/image-file.png" alt="" class="avatar-xs">
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-14 mb-1"><a href="#" class="text-truncate p-0">Image-001.jpg</a>
                                        </h5>
                                        <p class="text-muted text-truncate fs-13 mb-0">4.2 MB</p>
                                    </div>

                                    <div class="flex-shrink-0 ms-3">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle fs-16 text-muted px-1" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Open
                                                    <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Edit
                                                    <i class="bx bx-pencil ms-2 text-muted"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Delete
                                                    <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 ms-1 me-3">
                                        <img src="/assets/images/link-file.png" alt="" class="avatar-xs">
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-14 mb-1"><a href="#" class="text-truncate p-0">Images</a></h5>
                                        <p class="text-muted text-truncate fs-13 mb-0">https://images123.com/</p>
                                    </div>

                                    <div class="flex-shrink-0 ms-3">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle fs-18 text-muted px-1" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Open
                                                    <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Edit
                                                    <i class="bx bx-pencil ms-2 text-muted"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Delete
                                                    <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 ms-1 me-3">
                                        <img src="/assets/images/link-file.png" alt="" class="avatar-xs">
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-14 mb-1"><a href="#" class="text-truncate p-0">Bg Gradient</a>
                                        </h5>
                                        <p class="text-muted text-truncate fs-13 mb-0">https://bggradient.com/</p>
                                    </div>

                                    <div class="flex-shrink-0 ms-3">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle fs-18 text-muted px-1" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Open
                                                    <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Edit
                                                    <i class="bx bx-pencil ms-2 text-muted"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Delete
                                                    <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 ms-1 me-3">
                                        <img src="/assets/images/image-file.png" alt="" class="avatar-xs">
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-14 mb-1"><a href="#" class="text-truncate p-0">Image-012.jpg</a>
                                        </h5>
                                        <p class="text-muted text-truncate fs-13 mb-0">3.1 MB</p>
                                    </div>

                                    <div class="flex-shrink-0 ms-3">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle fs-16 text-muted px-1" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Open
                                                    <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Edit
                                                    <i class="bx bx-pencil ms-2 text-muted"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Delete
                                                    <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 ms-1 me-3">
                                        <img src="/assets/images/zip-file.png" alt="" class="avatar-xs">
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-14 mb-1"><a href="#" class="text-truncate p-0">analytics
                                                dashboard.zip</a></h5>
                                        <p class="text-muted text-truncate fs-13 mb-0">6.7 MB</p>
                                    </div>

                                    <div class="flex-shrink-0 ms-3">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle fs-16 text-muted px-1" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Open
                                                    <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Edit
                                                    <i class="bx bx-pencil ms-2 text-muted"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Delete
                                                    <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 ms-1 me-3">
                                        <img src="/assets/images/image-file.png" alt="" class="avatar-xs">
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-14 mb-1"><a href="#" class="text-truncate p-0">Image-031.jpg</a>
                                        </h5>
                                        <p class="text-muted text-truncate fs-13 mb-0">4.2 MB</p>
                                    </div>

                                    <div class="flex-shrink-0 ms-3">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle fs-16 text-muted px-1" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Open
                                                    <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Edit
                                                    <i class="bx bx-pencil ms-2 text-muted"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Delete
                                                    <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 ms-1 me-3">
                                        <img src="/assets/images/txt-file.png" alt="" class="avatar-xs">
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-14 mb-1"><a href="#" class="text-truncate p-0">Changelog.txt</a>
                                        </h5>
                                        <p class="text-muted text-truncate fs-13 mb-0">6.7 MB</p>
                                    </div>

                                    <div class="flex-shrink-0 ms-3">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle fs-16 text-muted px-1" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Open
                                                    <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Edit
                                                    <i class="bx bx-pencil ms-2 text-muted"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Delete
                                                    <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 ms-1 me-3">
                                        <img src="/assets/images/zip-file.png" alt="" class="avatar-xs">
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-14 mb-1"><a href="#" class="text-truncate p-0">Widgets.zip</a>
                                        </h5>
                                        <p class="text-muted text-truncate fs-13 mb-0">6.7 MB</p>
                                    </div>

                                    <div class="flex-shrink-0 ms-3">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle fs-16 text-muted px-1" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Open
                                                    <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Edit
                                                    <i class="bx bx-pencil ms-2 text-muted"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Delete
                                                    <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 ms-1 me-3">
                                        <img src="/assets/images/image-file.png" alt="" class="avatar-xs">
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-14 mb-1"><a href="#" class="text-truncate p-0">logo-light.png</a>
                                        </h5>
                                        <p class="text-muted text-truncate fs-13 mb-0">4.2 MB</p>
                                    </div>

                                    <div class="flex-shrink-0 ms-3">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle fs-16 text-muted px-1" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Open
                                                    <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Edit
                                                    <i class="bx bx-pencil ms-2 text-muted"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Delete
                                                    <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 ms-1 me-3">
                                        <img src="/assets/images/image-file.png" alt="" class="avatar-xs">
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-14 mb-1"><a href="#" class="text-truncate p-0">Image-2.jpg</a>
                                        </h5>
                                        <p class="text-muted text-truncate fs-13 mb-0">3.1 MB</p>
                                    </div>

                                    <div class="flex-shrink-0 ms-3">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle fs-16 text-muted px-1" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Open
                                                    <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Edit
                                                    <i class="bx bx-pencil ms-2 text-muted"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Delete
                                                    <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 ms-1 me-3">
                                        <img src="/assets/images/zip-file.png" alt="" class="avatar-xs">
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-14 mb-1"><a href="#" class="text-truncate p-0">Landing-A.zip</a>
                                        </h5>
                                        <p class="text-muted text-truncate fs-13 mb-0">6.7 MB</p>
                                    </div>

                                    <div class="flex-shrink-0 ms-3">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle fs-16 text-muted px-1" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="bx bx-dots-horizontal-rounded"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Open
                                                    <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Edit
                                                    <i class="bx bx-pencil ms-2 text-muted"></i></a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#">Delete
                                                    <i class="bx bx-trash ms-2 text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <!-- end contact lists -->
                </div>
                <!-- Start Contact content -->
            </div>
            <!-- End bookmark tab-pane -->

            <!-- Start settings tab-pane -->
            <Setting />
            <!-- End settings tab-pane -->
        </div>
        <!-- end tab content -->
    </div>
</template>

<style scoped>
.chat-container {
    padding: 20px;
    max-height: 400px;
    overflow-y: auto;
    background-color: #f9f9f9;
}

.chat-message-item {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: white;
    border-radius: 8px;
    margin-bottom: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 12px;
}

.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.message-content {
    flex-grow: 1;
}

.friend-name {
    font-weight: bold;
    font-size: 16px;
    color: #333;
}

.friend-status {
    font-size: 12px;
    margin-top: 4px;
}

.friend-status.online {
    color: green;
    font-weight: bold;
}

.friend-status.offline {
    color: gray;
}

.chat-message-item:hover {
    background-color: #e6f7ff;
    cursor: pointer;
}
</style>