<script setup>
import { useAuthStore } from '@/stores/authStore/authStore';
import { useFriendStore } from '@/stores/messengerStore/friendList';
import { imageUrl } from '@/utility/baseUrl';

const friendStore = useFriendStore();
const authStore = useAuthStore();
</script>
<template>
    <!-- audiocall Modal -->
    <div class="modal fade audiocallModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border border-0 overflow-hidden">
                <div class="modal-body p-0">
                    <div class="text-center p-4 pb-0">

                        <div class="avatar-xl mx-auto mb-4">
                            <img :src="imageUrl + friendStore.friendDetails.image" alt=""
                                class="img-thumbnail rounded-circle">
                        </div>
                        <div>
                            <h5 class="fs-22 text-truncate mb-0">{{ friendStore.friendInfo.username }}</h5>
                            <p class="text-muted">05:45</p>
                        </div>

                        <div class="d-flex justify-content-center align-items-center gap-3 mt-4">
                            <a href="#" class="avatar-sm">
                                <div class="avatar-title bg-danger-subtle 
 text-danger text-danger fs-20 rounded-circle">
                                    <i class="bx bx-video-recording"></i>
                                </div>
                            </a>
                            <a href="#" class="avatar-sm">
                                <div class="avatar-title bg-success-subtle text-success fs-20 rounded-circle">
                                    <i class="bx bx-volume-full"></i>
                                </div>
                            </a>
                            <a href="javascript:void(0)" class="avatar-sm">
                                <div class="avatar-title bg-info-subtle  text-info text-info fs-20 rounded-circle">
                                    <i class="bx bx-user-plus"></i>
                                </div>
                            </a>
                        </div>

                        <div class="mt-4">
                            <button type="button" class="btn btn-danger avatar-md call-close-btn rounded-circle"
                                data-bs-dismiss="modal">
                                <span class="avatar-title bg-transparent fs-24">
                                    <i class="mdi mdi-phone-hangup"></i>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="p-4 bg-primary-gradient mt-n4">
                        <div class="d-flex audio-call-menu">
                            <div class="flex-grow-1">
                                <button type="button" class="btn btn-light avatar-sm">
                                    <span class="avatar-title bg-transparent fs-20">
                                        <i class="ri-question-answer-line"></i>
                                    </span>
                                </button>
                            </div>
                            <div class="flex-shrink-0">
                                <button type="button" class="btn btn-light avatar-sm">
                                    <span class="avatar-title bg-transparent fs-20">
                                        <i class="bx bx-microphone-off"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- audiocall Modal -->

    <!-- videocall Modal -->
    <div class="modal fade videocallModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0">
                <div class="modal-body p-0">
                    <div class="videocall-overlay"></div>
                    <div class="video-call-title position-absolute top-0 start-50 translate-middle-x mt-3 text-center">
                        <h5 class="fs-22 text-truncate text-white">{{ friendStore.friendInfo.username }}</h5>
                        <span class="badge text-white fs-12">05:27</span>
                    </div>

                    <img :src="imageUrl + friendStore.friendInfo.image" alt="" class="videocallModal-bg">

                    <div>
                        <img :src="imageUrl + authStore.user.image" alt="" class="avatar-lg video-call-profile rounded">
                    </div>

                    <div class="position-absolute start-0 end-0 bottom-0">
                        <div class="text-center">
                            <button type="button" class="btn btn-danger avatar-md call-close-btn rounded-circle"
                                data-bs-dismiss="modal">
                                <span class="avatar-title bg-transparent fs-24">
                                    <i class="mdi mdi-phone-hangup"></i>
                                </span>
                            </button>
                        </div>

                        <div class="p-4 bg-primary-gradient mt-n4">
                            <div class="d-flex gap-4 justify-content-center video-call-menu mt-2">
                                <a href="javascript:void(0);" class="btn btn-light avatar-sm rounded-circle">
                                    <span class="avatar-title bg-transparent fs-20">
                                        <i class="bx bx-microphone-off"></i>
                                    </span>
                                </a>
                                <a href="javascript:void(0);" class="btn btn-light avatar-sm rounded-circle me-4">
                                    <span class="avatar-title bg-transparent fs-20">
                                        <i class="bx bx-video-off"></i>
                                    </span>
                                </a>
                                <a href="javascript:void(0);" class="btn btn-light avatar-sm rounded-circle ms-5">
                                    <span class="avatar-title bg-transparent fs-20">
                                        <i class="bx bx-volume-full"></i>
                                    </span>
                                </a>
                                <a href="javascript:void(0);" class="btn btn-light avatar-sm rounded-circle">
                                    <span class="avatar-title bg-transparent fs-20">
                                        <i class="bx bx-refresh"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end modal -->

    <!-- groupvideocall Modal -->
    <div class="modal fade groupvideocallModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0">
                <div class="modal-body p-0 overflow-hidden">
                    <div class="videocall-overlay"></div>
                    <div class="video-call-title position-absolute top-0 start-0 mt-3 ms-3">
                        <h5 class="user-profile-show fs-22 text-truncate text-white">Reporting</h5>
                        <span class="badge text-white fs-11">05:27</span>
                    </div>
                    <img src="/assets/images/users/avatar-7.jpg" alt="" class="videocallModal-bg rounded" />
                    <ul class="list-unstyled groud-call-user vstack gap-3 position-absolute end-0 top-0 p-3">
                        <li>
                            <a href="javascript:void(0);"><img src="/assets/images/users/avatar-11.jpg" alt=""
                                    class="avatar-lg rounded"></a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"><img src="/assets/images/users/avatar-6.jpg" alt=""
                                    class="avatar-lg rounded" /></a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"><img src="/assets/images/users/avatar-3.jpg" alt=""
                                    class="avatar-lg rounded" /></a>
                        </li>
                    </ul>
                    <div class="position-absolute video-call-menu start-0 end-0 bottom-0 mb-3">
                        <div class="hstack justify-content-center gap-3">
                            <a href="javascript:void(0);" class="btn btn-light avatar-sm rounded-circle">
                                <span class="avatar-title bg-transparent fs-20">
                                    <i class="bx bx-microphone-off"></i>
                                </span>
                            </a>
                            <a href="javascript:void(0);" class="btn btn-light avatar-sm rounded-circle me-4">
                                <span class="avatar-title bg-transparent fs-20">
                                    <i class="bx bx-video-off"></i>
                                </span>
                            </a>
                            <button type="button"
                                class="btn btn-danger avatar-sm call-close-btn shadow-none rounded-circle"
                                data-bs-dismiss="modal">
                                <span class="avatar-title bg-transparent fs-24">
                                    <i class="mdi mdi-phone-hangup"></i>
                                </span>
                            </button>
                            <a href="javascript:void(0);" class="btn btn-light avatar-sm rounded-circle ms-4">
                                <span class="avatar-title bg-transparent fs-20">
                                    <i class="bx bx-volume-full"></i>
                                </span>
                            </a>
                            <a href="javascript:void(0);" class="btn btn-light avatar-sm rounded-circle">
                                <span class="avatar-title bg-transparent fs-20">
                                    <i class="bx bx-refresh"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end modal -->
</template>