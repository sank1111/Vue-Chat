<script setup>
import { useAuthStore } from '@/stores/authStore/authStore';

const authStore = useAuthStore();
</script>
<template>
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
                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <img src="/assets/images/users/avatar-1.jpg" class="rounded-circle avatar-lg img-thumbnail" alt="">
                </div>

                <h5 class="fs-17 mb-1 text-truncate">{{ authStore.user.username }}</h5>
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
                            <p class="mb-0">{{ authStore.user.username }}</p>
                        </div>
                    </div>

                    <div class="d-flex py-2 align-items-center">
                        <div class="flex-shrink-0 me-3">
                            <i class="ri-phone-line align-middle text-muted fs-19"></i>
                        </div>
                        <div class="flex-grow-1">
                            <p class="mb-0">+977 9830372922</p>
                        </div>
                    </div>

                    <div class="d-flex py-2 align-items-center">
                        <div class="flex-shrink-0 me-3">
                            <i class="ri-message-2-line align-middle text-muted fs-19"></i>
                        </div>
                        <div class="flex-grow-1">
                            <p class="fw-medium mb-0">{{ authStore.user.email }}</p>
                        </div>
                    </div>

                    <div class="d-flex py-2 align-items-center">
                        <div class="flex-shrink-0 me-3">
                            <i class="ri-map-pin-2-line align-middle text-muted fs-19"></i>
                        </div>
                        <div class="flex-grow-1">
                            <p class="mb-0">Jhapa, Nepal</p>
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
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
</template>