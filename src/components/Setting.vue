<script setup>
import { useAuthStore } from '@/stores/authStore/authStore';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();

function logout() {
    authStore.logout();
    watch(() => authStore.isLoggedIn, (newValue) => {
        if (newValue === false) { //user not authenticated, redirect to login page
            router.push('/login');
        }
    }, { immediate: true });

}
</script>
<template>
    <div class="tab-pane" id="pills-setting" role="tabpanel" aria-labelledby="pills-setting-tab">
        <!-- Start Settings content -->
        <div>
            <div class="user-profile-img">
                <img src="/assets/images/small/img-4.jpg" class="profile-img profile-foreground-img"
                    style="height: 160px;" alt="">
                <div class="overlay-content">
                    <div>
                        <div class="user-chat-nav p-3">

                            <div class="d-flex w-100 align-items-center">
                                <div class="flex-grow-1">
                                    <h5 class="text-white mb-0">Settings</h5>
                                </div>
                                <div class="flex-shrink-0">
                                    <div class="avatar-xs p-0 rounded-circle profile-photo-edit"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom"
                                        title="Change Background">
                                        <input id="profile-foreground-img-file-input" type="file"
                                            class="profile-foreground-img-file-input">
                                        <label for="profile-foreground-img-file-input"
                                            class="profile-photo-edit avatar-xs">
                                            <span class="avatar-title rounded-circle bg-light text-body">
                                                <i class="bx bxs-pencil"></i>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center p-3 p-lg-4 border-bottom pt-2 pt-lg-2 mt-n5 position-relative">
                <div class="mb-3 profile-user">
                    <img src="/assets/images/users/avatar-1.jpg"
                        class="rounded-circle avatar-lg img-thumbnail user-profile-image" alt="user-profile-image">
                    <div class="avatar-xs p-0 rounded-circle profile-photo-edit">
                        <input id="profile-img-file-input" type="file" class="profile-img-file-input">
                        <label for="profile-img-file-input" class="profile-photo-edit avatar-xs">
                            <span class="avatar-title rounded-circle bg-light text-body">
                                <i class="bx bxs-camera"></i>
                            </span>
                        </label>
                    </div>
                </div>

                <h5 class="fs-16 mb-1 text-truncate"></h5>

                <div class="dropdown d-inline-block">
                    <a class="text-muted dropdown-toggle d-block" href="#" role="button" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="bx bxs-circle text-success fs-10 align-middle"></i> Active <i
                            class="mdi mdi-chevron-down"></i>
                        <div><b>{{ authStore.user.username }}</b></div>
                    </a>

                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"><i
                                class="bx bxs-circle text-success fs-10 me-1 align-middle"></i>
                            Active</a>
                        <a class="dropdown-item" href="#"><i
                                class="bx bxs-circle text-warning fs-10 me-1 align-middle"></i>
                            Away</a>
                        <a class="dropdown-item" href="#"><i
                                class="bx bxs-circle text-danger fs-10 me-1 align-middle"></i>
                            Do
                            not disturb</a>
                    </div>
                </div>


            </div>
            <!-- End profile user -->

            <!-- Start User profile description -->
            <div class="user-setting" data-simplebar>
                <div id="settingprofile" class="accordion accordion-flush">
                    <div class="accordion-item">
                        <div class="accordion-header" id="headerpersonalinfo">
                            <a class="accordion-button fs-14 fw-medium" data-bs-toggle="collapse" href="#personalinfo"
                                aria-expanded="true" aria-controls="personalinfo">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-3 avatar-xs">
                                        <div class="avatar-title bg-info-subtle 
           text-info text-info rounded">
                                            <i class="bx bxs-user"></i>
                                        </div>
                                    </div>
                                    Personal Info
                                </div>
                            </a>
                        </div>
                        <div id="personalinfo" class="accordion-collapse collapse show"
                            aria-labelledby="headerpersonalinfo" data-bs-parent="#settingprofile">
                            <div class="accordion-body edit-input">
                                <div class="float-end">
                                    <a href="#" class="badge bg-light text-muted" id="user-profile-edit-btn"> <i
                                            class="bx bxs-pencil align-middle" id="edit-icon"></i>
                                    </a>
                                </div>

                                <div>
                                    <label for="exampleInputPassword1" class="form-label text-muted fs-13">Name</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1"
                                        :value="authStore.user.username" placeholder="Enter name" disabled>
                                </div>

                                <div>
                                    <label for="exampleInputPassword1" class="form-label text-muted fs-13">Email</label>
                                    <input type="email" class="form-control" id="exampleInputPassword1"
                                        :value="authStore.user.email" placeholder="Enter email" disabled>
                                </div>

                                <div class="mt-3">
                                    <label for="exampleInputPassword1" class="form-label text-muted fs-13">Phone
                                        No</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1"
                                        value="+(245) 4577 14523" placeholder="Enter phone no" disabled>
                                </div>

                                <div class="mt-3">
                                    <label for="exampleInputPassword1"
                                        class="form-label text-muted fs-13">Location</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1"
                                        value="Jhapa, Nepal" placeholder="Location" disabled>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end personal info card -->

                    <div class="accordion-item">
                        <div class="accordion-header" id="privacy1">
                            <a class="accordion-button fs-14 fw-medium collapsed" data-bs-toggle="collapse"
                                href="#privacy" aria-expanded="false" aria-controls="privacy">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-3 avatar-xs">
                                        <div class="avatar-title bg-info-subtle 
           text-info text-info rounded">
                                            <i class="bx bxs-lock"></i>
                                        </div>
                                    </div>
                                    Privacy
                                </div>
                            </a>
                        </div>
                        <div id="privacy" class="accordion-collapse collapse" aria-labelledby="privacy1"
                            data-bs-parent="#settingprofile">
                            <div class="accordion-body">
                                <h6 class="mb-3">Who can see my personal info</h6>
                                <ul class="list-unstyled vstack gap-4 mb-0">
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-13 mb-0 text-truncate">Profile photo</h5>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <select class="form-select form-select-sm">
                                                    <option value="Everyone" selected>Everyone</option>
                                                    <option value="Selected">Selected</option>
                                                    <option value="Nobody">Nobody</option>
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-13 mb-0 text-truncate">Status</h5>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <select class="form-select form-select-sm">
                                                    <option value="Everyone" selected>Everyone</option>
                                                    <option value="Selected">Selected</option>
                                                    <option value="Nobody">Nobody</option>
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-13 mb-0 text-truncate">Groups</h5>

                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <select class="form-select form-select-sm">
                                                    <option value="Everyone" selected>Everyone</option>
                                                    <option value="Selected">Selected</option>
                                                    <option value="Nobody">Nobody</option>
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-13 mb-0 text-truncate">Last seen</h5>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <div class="form-check form-switch">
                                                    <input type="checkbox" class="form-check-input"
                                                        id="privacy-lastseenSwitch" checked>
                                                    <label class="form-check-label"
                                                        for="privacy-lastseenSwitch"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-13 mb-0 text-truncate">Read receipts</h5>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <div class="form-check form-switch">
                                                    <input type="checkbox" class="form-check-input"
                                                        id="privacy-readreceiptSwitch" checked>
                                                    <label class="form-check-label"
                                                        for="privacy-readreceiptSwitch"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- end privacy card -->

                    <div class="accordion-item">
                        <div class="accordion-header" id="headersecurity">
                            <a class="accordion-button fs-14 fw-medium collapsed" data-bs-toggle="collapse"
                                href="#collapsesecurity" aria-expanded="false" aria-controls="collapsesecurity">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-3 avatar-xs">
                                        <div class="avatar-title bg-info-subtle 
           text-info text-info rounded">
                                            <i class="bx bxs-check-shield"></i>
                                        </div>
                                    </div>
                                    Security
                                </div>
                            </a>
                        </div>
                        <div id="collapsesecurity" class="accordion-collapse collapse" aria-labelledby="headersecurity"
                            data-bs-parent="#settingprofile">
                            <div class="accordion-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item p-0">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-13 mb-0 text-truncate">Show security notification
                                                </h5>

                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <div class="form-check form-switch">
                                                    <input type="checkbox" class="form-check-input"
                                                        id="security-notificationswitch">
                                                    <label class="form-check-label"
                                                        for="security-notificationswitch"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- end security card -->



                    <div class="accordion-item">
                        <div class="accordion-header" id="headerhelp">
                            <button class="accordion-button fs-14 fw-medium collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapsehelp" aria-expanded="false"
                                aria-controls="collapsehelp">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-3 avatar-xs">
                                        <div class="avatar-title bg-info-subtle 
           text-info text-info rounded">
                                            <i class="bx bxs-help-circle"></i>
                                        </div>
                                    </div>
                                    Help
                                </div>
                            </button>
                        </div>
                        <div id="collapsehelp" class="accordion-collapse collapse" aria-labelledby="headerhelp"
                            data-bs-parent="#settingprofile">
                            <div class="accordion-body">
                                <ul class="list-unstyled vstack gap-4 mb-0">
                                    <li>
                                        <h5 class="fs-13 mb-0"><a href="#" class="text-body d-block">FAQs</a>
                                        </h5>
                                    </li>
                                    <li>
                                        <h5 class="fs-13 mb-0"><a href="#" class="text-body d-block">Contact</a>
                                        </h5>
                                    </li>
                                    <li>
                                        <h5 class="fs-13 mb-0"><a href="#" class="text-body d-block">Terms &
                                                Privacy policy</a>
                                        </h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Logout -->
                    <button class="btn btn-danger rounded-pill px-4 py-2" @click="logout()"
                        :style="{ marginTop: '4px', marginLeft: '98px' }">
                        Logout
                    </button>
                </div>
                <!-- end profile-setting-accordion -->
            </div>
            <!-- End User profile description -->
        </div>
        <!-- Start Settings content -->
    </div>
</template>