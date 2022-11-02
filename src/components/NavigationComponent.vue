<template>

    <nav class="navbar navbar-expand-lg fixed-top">
            <router-link to="/"><a class="navbar-brand">
                <div >
                    <v-img 
                    :src="require('../assets/izone_logo.png')"
                    contain
                    height="100"
                    width="100"
                    />
                </div>
            </a></router-link>

              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"><i class="fas fa-bars" style="color:#fff; font-size:28px;"></i></span>
            </button>

            <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
                <ul id="navbar-nav" class="navbar-nav ml-auto">
                    <router-link to = "/"><li>
                        <a class="nav-item nav-link">About iZone</a>
                    </li></router-link>
                    <router-link to = "/shop"><li>
                        <a class="nav-item nav-link">iZone Shop</a>
                    </li></router-link>
                    <router-link to = "/cart"><li>
                        <a class="nav-item nav-link">Cart</a>
                    </li></router-link>
                    <router-link to = "/user-login"><li id="login">
                        <a class="nav-item nav-link login">Log in</a>
                    </li></router-link>
                </ul>
            </div>
          </nav>

</template>
