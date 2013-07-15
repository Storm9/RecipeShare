


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>cloudinary_js/js/jquery.cloudinary.js at master · cloudinary/cloudinary_js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe13.rs.github.com">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="4574509" name="octolytics-actor-id" /><meta content="piatt" name="octolytics-actor-login" /><meta content="eaade13543936ce0f29b4caa2788b77ad1fa4f95925a00c250bd79525c2749c2" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="rLhtUCU+5PKUtEf2Mx3Ny3BgS6f7Vgkq9J1LLbk+YQY=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-105e49dc6acd41ca6cefa6d64b769a892393add7.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-16bce41617e42cac00d6f38b893325bf7b664eed.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-e8054ad804a1cf9e9849130fee5a4a5487b663ed.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-f7f3b1f6314ae7568a0f124079a7eb86bb51305e.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="274b6478180749a9fef0c6c47c649ed8">

        <link data-pjax-transient rel='permalink' href='/cloudinary/cloudinary_js/blob/6050face5a4f169f008abdcf23a81008f348307d/js/jquery.cloudinary.js'>
  <meta property="og:title" content="cloudinary_js"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/cloudinary/cloudinary_js"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="cloudinary_js - Cloudinary JavaScript library"/>

  <meta name="description" content="cloudinary_js - Cloudinary JavaScript library" />

  <meta content="1460763" name="octolytics-dimension-user_id" /><meta content="cloudinary" name="octolytics-dimension-user_login" /><meta content="4061261" name="octolytics-dimension-repository_id" /><meta content="cloudinary/cloudinary_js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4061261" name="octolytics-dimension-repository_network_root_id" /><meta content="cloudinary/cloudinary_js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/cloudinary/cloudinary_js/commits/master.atom" rel="alternate" title="Recent Commits to cloudinary_js:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production ">

    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="piatt"
      data-repo="cloudinary/cloudinary_js"
      data-branch="master"
      data-sha="fbf1ab986176abfb01d1a7074193751108d473b9"
  >

    <input type="hidden" name="nwo" value="cloudinary/cloudinary_js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="/piatt" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/f6c40015a808192177bb90d95a0e9748?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> piatt
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings ">
            <span class="octicon octicon-tools"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="cloudinary/cloudinary_js">This repository</span>
    </li>
    <li>
      <a href="/cloudinary/cloudinary_js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="rLhtUCU+5PKUtEf2Mx3Ny3BgS6f7Vgkq9J1LLbk+YQY=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="4061261" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/cloudinary/cloudinary_js/watchers">
          7
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/cloudinary/cloudinary_js/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/cloudinary/cloudinary_js/star" class="minibutton with-count js-toggler-target star-button unstarred upwards " title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/cloudinary/cloudinary_js/stargazers">39</a>
</div>

  </li>


        <li>
          <a href="/cloudinary/cloudinary_js/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/cloudinary/cloudinary_js/network" class="social-count">14</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/cloudinary" class="url fn" itemprop="url" rel="author"><span itemprop="title">cloudinary</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/cloudinary/cloudinary_js" class="js-current-repository js-repo-home-link">cloudinary_js</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container
            ">

          <div class="repository-sidebar">

              

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/cloudinary/cloudinary_js" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /cloudinary/cloudinary_js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/cloudinary/cloudinary_js/issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /cloudinary/cloudinary_js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>3</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/cloudinary/cloudinary_js/pulls" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /cloudinary/cloudinary_js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/cloudinary/cloudinary_js/wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /cloudinary/cloudinary_js/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/cloudinary/cloudinary_js/pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /cloudinary/cloudinary_js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/cloudinary/cloudinary_js/graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /cloudinary/cloudinary_js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/cloudinary/cloudinary_js/network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /cloudinary/cloudinary_js/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>


              <div class="only-with-full-nav">

                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/cloudinary/cloudinary_js.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/cloudinary/cloudinary_js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:cloudinary/cloudinary_js.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:cloudinary/cloudinary_js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/cloudinary/cloudinary_js" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/cloudinary/cloudinary_js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>


  <a href="github-windows://openRepo/https://github.com/cloudinary/cloudinary_js" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                  <a href="/cloudinary/cloudinary_js/archive/master.zip"
                     class="minibutton sidebar-button"
                     title="Download this repository as a zip file"
                     rel="nofollow">
                    <span class="octicon octicon-cloud-download"></span>
                    Download ZIP
                  </a>

              </div>
          </div>

          <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
            


<!-- blob contrib key: blob_contributors:v21:f692690e5a7790eff2ffacf5f52adb86 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:f692690e5a7790eff2ffacf5f52adb86 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/cloudinary/cloudinary_js/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/blob/master/js/jquery.cloudinary.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/blob/1.0.6/js/jquery.cloudinary.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.6" rel="nofollow" title="1.0.6">1.0.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/blob/1.0.5/js/jquery.cloudinary.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.5" rel="nofollow" title="1.0.5">1.0.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/blob/1.0.4/js/jquery.cloudinary.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.4" rel="nofollow" title="1.0.4">1.0.4</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/cloudinary/cloudinary_js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">cloudinary_js</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/cloudinary/cloudinary_js/tree/master/js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">jquery.cloudinary.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="js/jquery.cloudinary.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/7c55931355d0c521315e793b093d9d62?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/nadavs" rel="author">nadavs</a></span>
    <time class="js-relative-date" datetime="2013-07-01T07:47:02-07:00" title="2013-07-01 07:47:02">July 01, 2013</time>
    <div class="commit-title">
        <a href="/cloudinary/cloudinary_js/commit/118aae381baf34271af4b0dcf6bb3327705c5bcd" class="message" data-pjax="true">Increment version to v1.0.6: Upgrade to jQuery File Upload 5.31.6, in…</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>3</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="TalLevAmi" href="/cloudinary/cloudinary_js/commits/master/js/jquery.cloudinary.js?author=TalLevAmi"><img height="20" src="https://secure.gravatar.com/avatar/8fcfad6c8c95f39bbcd50c3b4c813bfb?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="nadavs" href="/cloudinary/cloudinary_js/commits/master/js/jquery.cloudinary.js?author=nadavs"><img height="20" src="https://secure.gravatar.com/avatar/7c55931355d0c521315e793b093d9d62?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="digitaltoad" href="/cloudinary/cloudinary_js/commits/master/js/jquery.cloudinary.js?author=digitaltoad"><img height="20" src="https://secure.gravatar.com/avatar/963f5066140b3925533c45db1f6d3538?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/8fcfad6c8c95f39bbcd50c3b4c813bfb?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/TalLevAmi">TalLevAmi</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/7c55931355d0c521315e793b093d9d62?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/nadavs">nadavs</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/963f5066140b3925533c45db1f6d3538?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/digitaltoad">digitaltoad</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>373 lines (342 sloc)</span>
        <span>17.013 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped leftwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/cloudinary/cloudinary_js/edit/master/js/jquery.cloudinary.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/cloudinary/cloudinary_js/raw/master/js/jquery.cloudinary.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/cloudinary/cloudinary_js/blame/master/js/jquery.cloudinary.js" class="button minibutton ">Blame</a>
          <a href="/cloudinary/cloudinary_js/commits/master/js/jquery.cloudinary.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/cloudinary/cloudinary_js/delete/master/js/jquery.cloudinary.js"
               title="Fork this project and delete file" data-method="post" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * Cloudinary&#39;s jQuery library - v1.0.6</span></div><div class='line' id='LC3'><span class="cm"> * Copyright Cloudinary</span></div><div class='line' id='LC4'><span class="cm"> * see https://github.com/cloudinary/cloudinary_js</span></div><div class='line' id='LC5'><span class="cm"> */</span></div><div class='line' id='LC6'><br/></div><div class='line' id='LC7'><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">$</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC8'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">CF_SHARED_CDN</span> <span class="o">=</span> <span class="s2">&quot;d3jpl91pxevbkh.cloudfront.net&quot;</span><span class="p">;</span></div><div class='line' id='LC9'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">AKAMAI_SHARED_CDN</span> <span class="o">=</span> <span class="s2">&quot;cloudinary-a.akamaihd.net&quot;</span><span class="p">;</span></div><div class='line' id='LC10'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">SHARED_CDN</span> <span class="o">=</span> <span class="nx">AKAMAI_SHARED_CDN</span><span class="p">;</span></div><div class='line' id='LC11'>&nbsp;&nbsp;</div><div class='line' id='LC12'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">utf8_encode</span> <span class="p">(</span><span class="nx">argString</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// http://kevin.vanzonneveld.net</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// +   original by: Webtoolkit.info (http://www.webtoolkit.info/)</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)</span></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// +   improved by: sowberry</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// +    tweaked by: Jack</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// +   bugfixed by: Onno Marsman</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// +   improved by: Yves Sucaet</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// +   bugfixed by: Onno Marsman</span></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// +   bugfixed by: Ulrich</span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// +   bugfixed by: Rafal Kukawski</span></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// +   improved by: kirilloid</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// *     example 1: utf8_encode(&#39;Kevin van Zonneveld&#39;);</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// *     returns 1: &#39;Kevin van Zonneveld&#39;</span></div><div class='line' id='LC26'>&nbsp;&nbsp;</div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">argString</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">argString</span> <span class="o">===</span> <span class="s2">&quot;undefined&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC30'>&nbsp;&nbsp;</div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">string</span> <span class="o">=</span> <span class="p">(</span><span class="nx">argString</span> <span class="o">+</span> <span class="s1">&#39;&#39;</span><span class="p">);</span> <span class="c1">// .replace(/\r\n/g, &quot;\n&quot;).replace(/\r/g, &quot;\n&quot;);</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">utftext</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">,</span> <span class="nx">stringl</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC34'>&nbsp;&nbsp;</div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">start</span> <span class="o">=</span> <span class="nx">end</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stringl</span> <span class="o">=</span> <span class="nx">string</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">n</span> <span class="o">&lt;</span> <span class="nx">stringl</span><span class="p">;</span> <span class="nx">n</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">c1</span> <span class="o">=</span> <span class="nx">string</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">n</span><span class="p">);</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">enc</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC40'>&nbsp;&nbsp;</div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">c1</span> <span class="o">&lt;</span> <span class="mi">128</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">end</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">c1</span> <span class="o">&gt;</span> <span class="mi">127</span> <span class="o">&amp;&amp;</span> <span class="nx">c1</span> <span class="o">&lt;</span> <span class="mi">2048</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">enc</span> <span class="o">=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">((</span><span class="nx">c1</span> <span class="o">&gt;&gt;</span> <span class="mi">6</span><span class="p">)</span> <span class="o">|</span> <span class="mi">192</span><span class="p">,</span> <span class="p">(</span><span class="nx">c1</span> <span class="o">&amp;</span> <span class="mi">63</span><span class="p">)</span> <span class="o">|</span> <span class="mi">128</span><span class="p">);</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">enc</span> <span class="o">=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">((</span><span class="nx">c1</span> <span class="o">&gt;&gt;</span> <span class="mi">12</span><span class="p">)</span> <span class="o">|</span> <span class="mi">224</span><span class="p">,</span> <span class="p">((</span><span class="nx">c1</span> <span class="o">&gt;&gt;</span> <span class="mi">6</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mi">63</span><span class="p">)</span> <span class="o">|</span> <span class="mi">128</span><span class="p">,</span> <span class="p">(</span><span class="nx">c1</span> <span class="o">&amp;</span> <span class="mi">63</span><span class="p">)</span> <span class="o">|</span> <span class="mi">128</span><span class="p">);</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">enc</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">end</span> <span class="o">&gt;</span> <span class="nx">start</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">utftext</span> <span class="o">+=</span> <span class="nx">string</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">);</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">utftext</span> <span class="o">+=</span> <span class="nx">enc</span><span class="p">;</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">start</span> <span class="o">=</span> <span class="nx">end</span> <span class="o">=</span> <span class="nx">n</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC56'>&nbsp;&nbsp;</div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">end</span> <span class="o">&gt;</span> <span class="nx">start</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">utftext</span> <span class="o">+=</span> <span class="nx">string</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">stringl</span><span class="p">);</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC60'>&nbsp;&nbsp;</div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">utftext</span><span class="p">;</span></div><div class='line' id='LC62'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC63'>&nbsp;&nbsp;</div><div class='line' id='LC64'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">crc32</span> <span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// http://kevin.vanzonneveld.net</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// +   original by: Webtoolkit.info (http://www.webtoolkit.info/)</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// +   improved by: T0bsn</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// +   improved by: http://stackoverflow.com/questions/2647935/javascript-crc32-function-and-php-crc32-not-matching</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// -    depends on: utf8_encode</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// *     example 1: crc32(&#39;Kevin van Zonneveld&#39;);</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// *     returns 1: 1249991249</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">utf8_encode</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">table</span> <span class="o">=</span> <span class="s2">&quot;00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D&quot;</span><span class="p">;</span></div><div class='line' id='LC74'>&nbsp;&nbsp;</div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">crc</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC78'>&nbsp;&nbsp;</div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">crc</span> <span class="o">=</span> <span class="nx">crc</span> <span class="o">^</span> <span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">iTop</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">iTop</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">y</span> <span class="o">=</span> <span class="p">(</span><span class="nx">crc</span> <span class="o">^</span> <span class="nx">str</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">))</span> <span class="o">&amp;</span> <span class="mh">0xFF</span><span class="p">;</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">x</span> <span class="o">=</span> <span class="s2">&quot;0x&quot;</span> <span class="o">+</span> <span class="nx">table</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="nx">y</span> <span class="o">*</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">8</span><span class="p">);</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">crc</span> <span class="o">=</span> <span class="p">(</span><span class="nx">crc</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">8</span><span class="p">)</span> <span class="o">^</span> <span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC85'>&nbsp;&nbsp;</div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">crc</span> <span class="o">=</span> <span class="nx">crc</span> <span class="o">^</span> <span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//convert to unsigned 32-bit int if needed</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">crc</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span><span class="nx">crc</span> <span class="o">+=</span> <span class="mi">4294967296</span><span class="p">}</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">crc</span><span class="p">;</span></div><div class='line' id='LC90'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="nx">option_name</span><span class="p">,</span> <span class="nx">default_value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="nx">option_name</span><span class="p">];</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">options</span><span class="p">[</span><span class="nx">option_name</span><span class="p">];</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">typeof</span><span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">?</span> <span class="nx">default_value</span> <span class="o">:</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC96'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC97'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">build_array</span><span class="p">(</span><span class="nx">arg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">arg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[];</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">arg</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">arg</span><span class="p">;</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span> </div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span><span class="nx">arg</span><span class="p">];</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC105'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC106'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">present</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">typeof</span> <span class="nx">value</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="s2">&quot;&quot;</span> <span class="o">+</span> <span class="nx">value</span><span class="p">).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC108'>&nbsp;&nbsp;<span class="p">}</span> </div><div class='line' id='LC109'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">generate_transformation_string</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">width</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="s1">&#39;width&#39;</span><span class="p">];</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">height</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="s1">&#39;height&#39;</span><span class="p">];</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">size</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;size&#39;</span><span class="p">);</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">size</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">split_size</span> <span class="o">=</span> <span class="nx">size</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;x&quot;</span><span class="p">);</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">[</span><span class="s1">&#39;width&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">width</span> <span class="o">=</span> <span class="nx">split_size</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">[</span><span class="s1">&#39;height&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">height</span> <span class="o">=</span> <span class="nx">split_size</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span>  </div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span>       </div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">has_layer</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">overlay</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">underlay</span><span class="p">;</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">crop</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;crop&#39;</span><span class="p">);</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">angle</span> <span class="o">=</span> <span class="nx">build_array</span><span class="p">(</span><span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;angle&#39;</span><span class="p">)).</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">);</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">no_html_sizes</span> <span class="o">=</span> <span class="nx">has_layer</span> <span class="o">||</span> <span class="nx">present</span><span class="p">(</span><span class="nx">angle</span><span class="p">)</span> <span class="o">||</span> <span class="nx">crop</span> <span class="o">==</span> <span class="s2">&quot;fit&quot;</span> <span class="o">||</span> <span class="nx">crop</span> <span class="o">==</span> <span class="s2">&quot;limit&quot;</span> <span class="o">||</span> <span class="nx">crop</span> <span class="o">==</span> <span class="s2">&quot;lfill&quot;</span><span class="p">;</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">width</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">no_html_sizes</span> <span class="o">||</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">width</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">1</span><span class="p">))</span> <span class="k">delete</span> <span class="nx">options</span><span class="p">[</span><span class="s1">&#39;width&#39;</span><span class="p">];</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">height</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">no_html_sizes</span> <span class="o">||</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">height</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">1</span><span class="p">))</span> <span class="k">delete</span> <span class="nx">options</span><span class="p">[</span><span class="s1">&#39;height&#39;</span><span class="p">];</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">crop</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">has_layer</span><span class="p">)</span> <span class="nx">width</span> <span class="o">=</span> <span class="nx">height</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">background</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;background&#39;</span><span class="p">);</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">background</span> <span class="o">=</span> <span class="nx">background</span> <span class="o">&amp;&amp;</span> <span class="nx">background</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^#/</span><span class="p">,</span> <span class="s1">&#39;rgb:&#39;</span><span class="p">);</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">base_transformations</span> <span class="o">=</span> <span class="nx">build_array</span><span class="p">(</span><span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;transformation&#39;</span><span class="p">,</span> <span class="p">[]));</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">named_transformation</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">grep</span><span class="p">(</span><span class="nx">base_transformations</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">bs</span><span class="p">)</span> <span class="p">{</span><span class="k">return</span> <span class="k">typeof</span><span class="p">(</span><span class="nx">bs</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">;}).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">base_transformations</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">base_transformations</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">base_transformation</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">typeof</span><span class="p">(</span><span class="nx">base_transformation</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span> <span class="o">?</span> <span class="nx">generate_transformation_string</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">base_transformation</span><span class="p">))</span> <span class="o">:</span> <span class="nx">generate_transformation_string</span><span class="p">({</span><span class="nx">transformation</span><span class="o">:</span> <span class="nx">base_transformation</span><span class="p">});</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">named_transformation</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">grep</span><span class="p">(</span><span class="nx">base_transformations</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="k">this</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="k">this</span> <span class="o">!=</span> <span class="s2">&quot;&quot;</span><span class="p">}).</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">);</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">base_transformations</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">effect</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s2">&quot;effect&quot;</span><span class="p">);</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">effect</span><span class="p">))</span> <span class="nx">effect</span> <span class="o">=</span> <span class="nx">effect</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;:&quot;</span><span class="p">);</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">border</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s2">&quot;border&quot;</span><span class="p">)</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">isPlainObject</span><span class="p">(</span><span class="nx">border</span><span class="p">))</span> <span class="p">{</span> </div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">border_width</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">border</span><span class="p">.</span><span class="nx">width</span> <span class="o">||</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">border_color</span> <span class="o">=</span> <span class="p">(</span><span class="nx">border</span><span class="p">.</span><span class="nx">color</span> <span class="o">||</span> <span class="s2">&quot;black&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^#/</span><span class="p">,</span> <span class="s1">&#39;rgb:&#39;</span><span class="p">);</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">border</span> <span class="o">=</span> <span class="nx">border_width</span> <span class="o">+</span> <span class="s2">&quot;px_solid_&quot;</span> <span class="o">+</span> <span class="nx">border_color</span><span class="p">;</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">flags</span> <span class="o">=</span> <span class="nx">build_array</span><span class="p">(</span><span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;flags&#39;</span><span class="p">)).</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">);</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">[[</span><span class="s1">&#39;c&#39;</span><span class="p">,</span> <span class="nx">crop</span><span class="p">],</span> <span class="p">[</span><span class="s1">&#39;t&#39;</span><span class="p">,</span> <span class="nx">named_transformation</span><span class="p">],</span> <span class="p">[</span><span class="s1">&#39;w&#39;</span><span class="p">,</span> <span class="nx">width</span><span class="p">],</span> <span class="p">[</span><span class="s1">&#39;h&#39;</span><span class="p">,</span> <span class="nx">height</span><span class="p">],</span> <span class="p">[</span><span class="s1">&#39;b&#39;</span><span class="p">,</span> <span class="nx">background</span><span class="p">],</span> <span class="p">[</span><span class="s1">&#39;e&#39;</span><span class="p">,</span> <span class="nx">effect</span><span class="p">],</span> <span class="p">[</span><span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">angle</span><span class="p">],</span> <span class="p">[</span><span class="s1">&#39;bo&#39;</span><span class="p">,</span> <span class="nx">border</span><span class="p">],</span> <span class="p">[</span><span class="s1">&#39;fl&#39;</span><span class="p">,</span> <span class="nx">flags</span><span class="p">]];</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">simple_params</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">x</span><span class="o">:</span> <span class="s1">&#39;x&#39;</span><span class="p">,</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">y</span><span class="o">:</span> <span class="s1">&#39;y&#39;</span><span class="p">,</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">radius</span><span class="o">:</span> <span class="s1">&#39;r&#39;</span><span class="p">,</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">gravity</span><span class="o">:</span> <span class="s1">&#39;g&#39;</span><span class="p">,</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">quality</span><span class="o">:</span> <span class="s1">&#39;q&#39;</span><span class="p">,</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">prefix</span><span class="o">:</span> <span class="s1">&#39;p&#39;</span><span class="p">,</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">default_image</span><span class="o">:</span> <span class="s1">&#39;d&#39;</span><span class="p">,</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">underlay</span><span class="o">:</span> <span class="s1">&#39;u&#39;</span><span class="p">,</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">overlay</span><span class="o">:</span> <span class="s1">&#39;l&#39;</span><span class="p">,</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fetch_format</span><span class="o">:</span> <span class="s1">&#39;f&#39;</span><span class="p">,</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">density</span><span class="o">:</span> <span class="s1">&#39;dn&#39;</span><span class="p">,</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">page</span><span class="o">:</span> <span class="s1">&#39;pg&#39;</span><span class="p">,</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">color_space</span><span class="o">:</span> <span class="s1">&#39;cl&#39;</span><span class="p">,</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">delay</span><span class="o">:</span> <span class="s1">&#39;dl&#39;</span><span class="p">,</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">opacity</span><span class="o">:</span> <span class="s1">&#39;o&#39;</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">param</span> <span class="k">in</span> <span class="nx">simple_params</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="nx">simple_params</span><span class="p">[</span><span class="nx">param</span><span class="p">],</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="nx">param</span><span class="p">)]);</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">&lt;</span><span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">?</span> <span class="o">-</span><span class="mi">1</span>  <span class="o">:</span> <span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">&gt;</span><span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="mi">0</span><span class="p">);});</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;raw_transformation&#39;</span><span class="p">)]);</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">transformation</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">grep</span><span class="p">(</span><span class="nx">params</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">param</span><span class="p">[</span><span class="nx">param</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">present</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">param</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;_&quot;</span><span class="p">);</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">);</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">base_transformations</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">transformation</span><span class="p">);</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">grep</span><span class="p">(</span><span class="nx">base_transformations</span><span class="p">,</span> <span class="nx">present</span><span class="p">).</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">);</span></div><div class='line' id='LC185'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC186'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dummyImg</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC187'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">absolutize</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">dummyImg</span><span class="p">)</span> <span class="nx">dummyImg</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;img&quot;</span><span class="p">);</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dummyImg</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">url</span><span class="p">;</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">dummyImg</span><span class="p">.</span><span class="nx">src</span><span class="p">;</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dummyImg</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">url</span><span class="p">;</span></div><div class='line' id='LC193'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC194'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">cloudinary_url</span><span class="p">(</span><span class="nx">public_id</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;type&#39;</span><span class="p">,</span> <span class="s1">&#39;upload&#39;</span><span class="p">);</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">==</span> <span class="s1">&#39;fetch&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">fetch_format</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">fetch_format</span> <span class="o">||</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;format&#39;</span><span class="p">);</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">transformation</span> <span class="o">=</span> <span class="nx">generate_transformation_string</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">resource_type</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;resource_type&#39;</span><span class="p">,</span> <span class="s2">&quot;image&quot;</span><span class="p">);</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">version</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;version&#39;</span><span class="p">);</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">format</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;format&#39;</span><span class="p">);</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cloud_name</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;cloud_name&#39;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cloudinary</span><span class="p">.</span><span class="nx">config</span><span class="p">().</span><span class="nx">cloud_name</span><span class="p">);</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">cloud_name</span><span class="p">)</span> <span class="k">throw</span> <span class="s2">&quot;Unknown cloud_name&quot;</span><span class="p">;</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">private_cdn</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;private_cdn&#39;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cloudinary</span><span class="p">.</span><span class="nx">config</span><span class="p">().</span><span class="nx">private_cdn</span><span class="p">);</span>    </div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">secure_distribution</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;secure_distribution&#39;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cloudinary</span><span class="p">.</span><span class="nx">config</span><span class="p">().</span><span class="nx">secure_distribution</span><span class="p">);</span>    </div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cname</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;cname&#39;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cloudinary</span><span class="p">.</span><span class="nx">config</span><span class="p">().</span><span class="nx">cname</span><span class="p">);</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cdn_subdomain</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;cdn_subdomain&#39;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cloudinary</span><span class="p">.</span><span class="nx">config</span><span class="p">().</span><span class="nx">cdn_subdomain</span><span class="p">);</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">shorten</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;shorten&#39;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cloudinary</span><span class="p">.</span><span class="nx">config</span><span class="p">().</span><span class="nx">shorten</span><span class="p">);</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">secure</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;secure&#39;</span><span class="p">,</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">==</span> <span class="s1">&#39;https:&#39;</span><span class="p">);</span> </div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">secure_distribution</span> <span class="o">=</span> <span class="nx">secure_distribution</span> <span class="o">||</span> <span class="nx">SHARED_CDN</span><span class="p">;</span> </div><div class='line' id='LC213'><br/></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">==</span> <span class="s1">&#39;fetch&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">public_id</span> <span class="o">=</span> <span class="nx">absolutize</span><span class="p">(</span><span class="nx">public_id</span><span class="p">);</span> </div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">public_id</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^https?:/</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">==</span> <span class="s2">&quot;upload&quot;</span> <span class="o">||</span> <span class="nx">type</span> <span class="o">==</span> <span class="s2">&quot;asset&quot;</span><span class="p">)</span> <span class="k">return</span> <span class="nx">public_id</span><span class="p">;</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">public_id</span> <span class="o">=</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">public_id</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/%3A/g</span><span class="p">,</span> <span class="s2">&quot;:&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/%2F/g</span><span class="p">,</span> <span class="s2">&quot;/&quot;</span><span class="p">);</span> </div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">format</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">public_id</span> <span class="o">+=</span> <span class="s2">&quot;.&quot;</span> <span class="o">+</span> <span class="nx">format</span><span class="p">;</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC224'><br/></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">prefix</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">==</span> <span class="s1">&#39;file:&#39;</span> <span class="o">?</span> <span class="s2">&quot;file://&quot;</span> <span class="o">:</span> <span class="p">(</span><span class="nx">secure</span> <span class="o">?</span> <span class="s1">&#39;https://&#39;</span> <span class="o">:</span> <span class="s1">&#39;http://&#39;</span><span class="p">);</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cloud_name</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^\//</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">secure</span><span class="p">)</span> <span class="p">{</span>    </div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">prefix</span> <span class="o">=</span> <span class="s2">&quot;/res&quot;</span> <span class="o">+</span> <span class="nx">cloud_name</span><span class="p">;</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC229'>	    <span class="kd">var</span> <span class="nx">subdomain</span> <span class="o">=</span> <span class="nx">cdn_subdomain</span> <span class="o">?</span> <span class="s2">&quot;a&quot;</span> <span class="o">+</span> <span class="p">((</span><span class="nx">crc32</span><span class="p">(</span><span class="nx">public_id</span><span class="p">)</span> <span class="o">%</span> <span class="mi">5</span><span class="p">)</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;.&quot;</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC230'>	    <span class="k">if</span> <span class="p">(</span><span class="nx">secure</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC231'>	      <span class="nx">prefix</span> <span class="o">+=</span> <span class="nx">secure_distribution</span><span class="p">;</span></div><div class='line' id='LC232'>	    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC233'>	      <span class="nx">host</span> <span class="o">=</span> <span class="nx">cname</span> <span class="o">||</span> <span class="p">(</span><span class="nx">private_cdn</span> <span class="o">?</span> <span class="nx">cloud_name</span> <span class="o">+</span> <span class="s2">&quot;-res.cloudinary.com&quot;</span> <span class="o">:</span> <span class="s2">&quot;res.cloudinary.com&quot;</span> <span class="p">);</span></div><div class='line' id='LC234'>	      <span class="nx">prefix</span> <span class="o">+=</span> <span class="nx">subdomain</span> <span class="o">+</span> <span class="nx">host</span><span class="p">;</span></div><div class='line' id='LC235'>	    <span class="p">}</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">private_cdn</span> <span class="o">||</span> <span class="p">(</span><span class="nx">secure</span> <span class="o">&amp;&amp;</span> <span class="nx">secure_distribution</span> <span class="o">==</span> <span class="nx">AKAMAI_SHARED_CDN</span><span class="p">))</span> <span class="nx">prefix</span> <span class="o">+=</span> <span class="s2">&quot;/&quot;</span> <span class="o">+</span> <span class="nx">cloud_name</span><span class="p">;</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">shorten</span> <span class="o">&amp;&amp;</span> <span class="nx">resource_type</span> <span class="o">==</span> <span class="s2">&quot;image&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">type</span> <span class="o">==</span> <span class="s2">&quot;upload&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resource_type</span> <span class="o">=</span> <span class="s2">&quot;iu&quot;</span><span class="p">;</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">public_id</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">public_id</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^v[0-9]+/</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">public_id</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^https?:\//</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">present</span><span class="p">(</span><span class="nx">version</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">version</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="p">[</span><span class="nx">prefix</span><span class="p">,</span> <span class="nx">resource_type</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">transformation</span><span class="p">,</span> <span class="nx">version</span> <span class="o">?</span> <span class="s2">&quot;v&quot;</span> <span class="o">+</span> <span class="nx">version</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">public_id</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/([^:])\/+/g</span><span class="p">,</span> <span class="s1">&#39;$1/&#39;</span><span class="p">);</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">url</span><span class="p">;</span></div><div class='line' id='LC249'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC250'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">html_only_attributes</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">width</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;html_width&#39;</span><span class="p">);</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">height</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="s1">&#39;html_height&#39;</span><span class="p">);</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">width</span><span class="p">)</span> <span class="nx">options</span><span class="p">[</span><span class="s1">&#39;width&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">width</span><span class="p">;</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">height</span><span class="p">)</span> <span class="nx">options</span><span class="p">[</span><span class="s1">&#39;height&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">height</span><span class="p">;</span>    </div><div class='line' id='LC255'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC256'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cloudinary_config</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC257'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">cloudinary</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">CF_SHARED_CDN</span><span class="o">:</span> <span class="nx">CF_SHARED_CDN</span><span class="p">,</span>  </div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">AKAMAI_SHARED_CDN</span><span class="o">:</span> <span class="nx">AKAMAI_SHARED_CDN</span><span class="p">,</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">SHARED_CDN</span><span class="o">:</span> <span class="nx">SHARED_CDN</span><span class="p">,</span>    </div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">config</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">new_config</span><span class="p">,</span> <span class="nx">new_value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">cloudinary_config</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cloudinary_config</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;meta[name^=&quot;cloudinary_&quot;]&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cloudinary_config</span><span class="p">[</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;name&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="s2">&quot;cloudinary_&quot;</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)]</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;content&#39;</span><span class="p">);</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">new_value</span><span class="p">)</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cloudinary_config</span><span class="p">[</span><span class="nx">new_config</span><span class="p">]</span> <span class="o">=</span> <span class="nx">new_value</span><span class="p">;</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">new_config</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">cloudinary_config</span><span class="p">[</span><span class="nx">new_config</span><span class="p">];</span></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">new_config</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cloudinary_config</span> <span class="o">=</span> <span class="nx">new_config</span><span class="p">;</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">cloudinary_config</span><span class="p">;</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">public_id</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">cloudinary_url</span><span class="p">(</span><span class="nx">public_id</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span>    </div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span>    </div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url_internal</span><span class="o">:</span> <span class="nx">cloudinary_url</span><span class="p">,</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transformation_string</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">generate_transformation_string</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">image</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">public_id</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="nx">cloudinary_url</span><span class="p">(</span><span class="nx">public_id</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">html_only_attributes</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;img/&gt;&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="nx">options</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;src&#39;</span><span class="p">,</span> <span class="nx">url</span><span class="p">);</span>      </div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">facebook_profile_image</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">public_id</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cloudinary</span><span class="p">.</span><span class="nx">image</span><span class="p">(</span><span class="nx">public_id</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;facebook&#39;</span><span class="p">},</span> <span class="nx">options</span><span class="p">));</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">twitter_profile_image</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">public_id</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cloudinary</span><span class="p">.</span><span class="nx">image</span><span class="p">(</span><span class="nx">public_id</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;twitter&#39;</span><span class="p">},</span> <span class="nx">options</span><span class="p">));</span></div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">twitter_name_profile_image</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">public_id</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cloudinary</span><span class="p">.</span><span class="nx">image</span><span class="p">(</span><span class="nx">public_id</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;twitter_name&#39;</span><span class="p">},</span> <span class="nx">options</span><span class="p">));</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">gravatar_image</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">public_id</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cloudinary</span><span class="p">.</span><span class="nx">image</span><span class="p">(</span><span class="nx">public_id</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;gravatar&#39;</span><span class="p">},</span> <span class="nx">options</span><span class="p">));</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fetch_image</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">public_id</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cloudinary</span><span class="p">.</span><span class="nx">image</span><span class="p">(</span><span class="nx">public_id</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;fetch&#39;</span><span class="p">},</span> <span class="nx">options</span><span class="p">));</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC307'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC308'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">cloudinary</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s1">&#39;img&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">img_options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">width</span><span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">),</span> <span class="nx">height</span><span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;height&#39;</span><span class="p">),</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">src</span><span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;src&#39;</span><span class="p">)},</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">data</span><span class="p">(),</span> <span class="nx">options</span><span class="p">));</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">public_id</span> <span class="o">=</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">img_options</span><span class="p">,</span> <span class="s1">&#39;source&#39;</span><span class="p">,</span> <span class="nx">option_consume</span><span class="p">(</span><span class="nx">img_options</span><span class="p">,</span> <span class="s1">&#39;src&#39;</span><span class="p">));</span> </div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="nx">cloudinary_url</span><span class="p">(</span><span class="nx">public_id</span><span class="p">,</span> <span class="nx">img_options</span><span class="p">);</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">html_only_attributes</span><span class="p">(</span><span class="nx">img_options</span><span class="p">);</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">attr</span><span class="p">({</span><span class="nx">src</span><span class="o">:</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">width</span><span class="o">:</span> <span class="nx">img_options</span><span class="p">[</span><span class="s1">&#39;width&#39;</span><span class="p">],</span> <span class="nx">height</span><span class="o">:</span> <span class="nx">img_options</span><span class="p">[</span><span class="s1">&#39;height&#39;</span><span class="p">]});</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC319'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC320'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">fetchify</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">cloudinary</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;type&#39;</span><span class="o">:</span> <span class="s1">&#39;fetch&#39;</span><span class="p">}));</span></div><div class='line' id='LC322'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC323'><span class="p">})(</span> <span class="nx">jQuery</span> <span class="p">);</span></div><div class='line' id='LC324'><br/></div><div class='line' id='LC325'><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">$</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC326'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">fileupload</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC328'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC329'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">cloudinary_fileupload</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">initializing</span> <span class="o">=</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;blueimpFileupload&#39;</span><span class="p">);</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">maxFileSize</span><span class="o">:</span> <span class="mi">20000000</span><span class="p">,</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dataType</span><span class="o">:</span> <span class="s1">&#39;json&#39;</span><span class="p">,</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">headers</span><span class="o">:</span> <span class="p">{</span><span class="s2">&quot;X-Requested-With&quot;</span><span class="o">:</span> <span class="s2">&quot;XMLHttpRequest&quot;</span><span class="p">}</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fileupload</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">initializing</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s2">&quot;fileuploaddone&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">result</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span>      </div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">result</span><span class="p">.</span><span class="nx">path</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;v&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">result</span><span class="p">.</span><span class="nx">version</span><span class="p">,</span> <span class="s2">&quot;/&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">result</span><span class="p">.</span><span class="nx">public_id</span><span class="p">,</span> </div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">result</span><span class="p">.</span><span class="nx">format</span> <span class="o">?</span> <span class="s2">&quot;.&quot;</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">result</span><span class="p">.</span><span class="nx">format</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">cloudinaryField</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">form</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">upload_info</span> <span class="o">=</span> <span class="p">[</span><span class="nx">data</span><span class="p">.</span><span class="nx">result</span><span class="p">.</span><span class="nx">resource_type</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">result</span><span class="p">.</span><span class="nx">type</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">result</span><span class="p">.</span><span class="nx">path</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;#&quot;</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">result</span><span class="p">.</span><span class="nx">signature</span><span class="p">;</span>  </div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">field</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">form</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;input[name=&quot;&#39;</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">cloudinaryField</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">);</span></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">field</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">field</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="nx">upload_info</span><span class="p">);</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;input&gt;&lt;/input&gt;&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">({</span><span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;hidden&quot;</span><span class="p">,</span> <span class="nx">name</span><span class="o">:</span> <span class="nx">data</span><span class="p">.</span><span class="nx">cloudinaryField</span><span class="p">}).</span><span class="nx">val</span><span class="p">(</span><span class="nx">upload_info</span><span class="p">).</span><span class="nx">appendTo</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">form</span><span class="p">);</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;cloudinarydone&#39;</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">fileupload</span><span class="p">(</span><span class="s1">&#39;option&#39;</span><span class="p">).</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">upload_url</span> <span class="o">=</span> <span class="s2">&quot;https://api.cloudinary.com/v1_1/&quot;</span> <span class="o">+</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cloudinary</span><span class="p">.</span><span class="nx">config</span><span class="p">().</span><span class="nx">cloud_name</span> <span class="o">+</span> <span class="s2">&quot;/upload&quot;</span><span class="p">;</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fileupload</span><span class="p">(</span><span class="s1">&#39;option&#39;</span><span class="p">,</span> <span class="s1">&#39;url&#39;</span><span class="p">,</span> <span class="nx">upload_url</span><span class="p">);</span></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC361'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC362'>&nbsp;&nbsp;</div><div class='line' id='LC363'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">cloudinary_upload_url</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">remote_url</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fileupload</span><span class="p">(</span><span class="s1">&#39;option&#39;</span><span class="p">,</span> <span class="s1">&#39;formData&#39;</span><span class="p">).</span><span class="nx">file</span> <span class="o">=</span> <span class="nx">remote_url</span><span class="p">;</span> </div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fileupload</span><span class="p">(</span><span class="s1">&#39;add&#39;</span><span class="p">,</span> <span class="p">{</span> <span class="nx">files</span><span class="o">:</span> <span class="p">[</span> <span class="nx">remote_url</span> <span class="p">]</span> <span class="p">});</span> </div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">fileupload</span><span class="p">(</span><span class="s1">&#39;option&#39;</span><span class="p">,</span> <span class="s1">&#39;formData&#39;</span><span class="p">).</span><span class="nx">file</span><span class="p">);</span>    </div><div class='line' id='LC367'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC368'>&nbsp;&nbsp;</div><div class='line' id='LC369'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;input.cloudinary-fileupload[type=file]&quot;</span><span class="p">).</span><span class="nx">cloudinary_fileupload</span><span class="p">();</span></div><div class='line' id='LC371'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC372'><span class="p">})(</span> <span class="nx">jQuery</span> <span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

          </div>
        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div>
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.07470s from fe13.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/cloudinary/cloudinary_js/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

