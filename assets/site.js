/* VincenTimes : petits automatismes (seul script du site, aucune ressource tierce).
   Sans JavaScript, les valeurs écrites en dur dans les pages restent affichées. */
(function () {
  var now = new Date();

  // Âge calculé depuis la date de naissance : <span data-birth="AAAA-MM-JJ">28</span>
  document.querySelectorAll('[data-birth]').forEach(function (el) {
    var p = el.dataset.birth.split('-').map(Number);
    var age = now.getFullYear() - p[0];
    if (now.getMonth() + 1 < p[1] || (now.getMonth() + 1 === p[1] && now.getDate() < p[2])) age--;
    el.textContent = age;
  });

  // Année en cours : <span data-year>2026</span>
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = now.getFullYear();
  });

  // Copier l'adresse mail au clic, avec « copié ! »
  document.querySelectorAll('.copy-mail').forEach(function (btn) {
    var done = btn.parentNode.querySelector('.copy-done');
    btn.addEventListener('click', function () {
      var ok = function () {
        done.textContent = document.documentElement.lang === 'en' ? 'copied!' : 'copié !';
        btn.parentNode.classList.add('is-copied');
        clearTimeout(btn._t);
        btn._t = setTimeout(function () {
          done.textContent = '';
          btn.parentNode.classList.remove('is-copied');
        }, 1800);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(btn.dataset.copy).then(ok, function () {});
      } else {
        var r = document.createRange(); r.selectNodeContents(btn);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        try { if (document.execCommand('copy')) ok(); } catch (e) {}
        s.removeAllRanges();
      }
    });
  });
})();
