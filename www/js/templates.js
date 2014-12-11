(function(){ window.JST || (window.JST = {}) 
window.JST["comments"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<a class="comments-close" href="javascript:"></a>\n<h2>'+
( APP_CONFIG.COMMENT_PROMPT )+
'</h2>\n\n<h3 class="commentBoxNotLoggedIn" id="login-overlay-link">You must be signed in to leave a comment. <a href="http://www.npr.org/templates/reg/login.php?returnUrl='+
( window.location )+
'">Sign In / Register</a></h3>\n\n<h3 class="commentBoxNotLoggedIn" id="logout-overlay-link" style="display:none;"><a href="http://www.npr.org/templates/reg/logout.php?returnUrl='+
( window.location )+
'">Sign out\n</a></h3>\n\n<p class="comment-terms">Please keep your community civil. All comments must follow the <a href="http://npr.org/discussionrules" target="new">NPR.org Community rules</a> and <a href="http://www.npr.org/about/termsofuse.html" target="new">terms of use</a>, and will be moderated prior to posting. NPR reserves the right to use the comments we receive, in whole or in part, and to use the commenter\'s name and location, in any medium. See also the <a href="http://www.npr.org/about/termsofuse.html" target="new">Terms of Use</a>, <a href="http://www.npr.org/about/privacypolicy.html" target="new">Privacy Policy</a> and <a href="http://npr.org/communityfaq" target="new">Community FAQ</a>.</p>\n\n<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>\n<a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>\n\n<div id="disqus_thread">&nbsp;</div>\n';
}
return __p;
};

window.JST["example"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<p>This project is is running with the following settings:</p>\n\n<pre>\n'+
( config )+
'    \n</pre>\n\n<p>This project has the following COPY configured:</p>\n\n<pre>\n'+
( copy )+
'\n</pre>\n\n<p>This text is rendered from a template found at <code>'+
( template_path )+
'</code>.</p>\n';
}
return __p;
};

})();