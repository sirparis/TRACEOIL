Επισκόπηση
==========

Η εφαρμογή TRACEOIL αναλαμβάνει την διαχείριση της πληροφορίας σχετικά με την
ιχνηλασιμότητα του ελαιόλαδου σε όλη την γραμμή παραγωγής του, από την
πρωτογενή παραγωγή, έως την εμφιάλωση και πώληση στον τελικό καταναλωτή. Το
σύστημα υλοποιεί μία ιεραρχική αλυσίδα ρόλων όπου θα συνδέονται μεταξύ τους και
μπορεί να γίνει ανίχνευση της προέλευσης του προϊόντος από τις μικρότερες
βαθμίδες της αλυσίδας μέχρι την κορυφή. Συγκεκριμένα, οι ρόλοι αυτοί θα είναι:

1.  Ο παραγωγός ελιάς

2.  Το ελαιοτριβείο

3.  Ο έμπορος

4.  Η εταιρεία εμφιάλωσης και πώλησης

5.  Πιθανοί εξωτερικοί χρήστες και το ευρύ κοινό


Overview
========

TRACEOIL app is responsible for the management of information related to the traceability of olive oil spanned through its production
line, starting from the primary sector and expanding to bottling and sale to the consumer. The current system is
based on a hierarchic chain of interconnected roles, therefore the origin of the product can be traced from top
to bottom of the above mentioned chain. Specifically the roles are:

1. Olive producer

2. Oil press

3. Merchant

4. Bottling Company


Σε ποιους απευθύνεται
=====================

Οι δυνητικοί χρήστες του συστήματος είναι τα ελαιοτριβεία, οι έμποροι ελαιολάδου και οι εταιρίες εμφιαλώσεως που συνεργάζονται
μεταξύ τους. Επιπλέον, πιθανοί προγραμματιστές οι οποίοι ενδιαφέρονται να εξελίξουν/διορθώσουν τον ήδη υπάρχων κώδικα.

Πλατφόρμα Υλοποίησης
====================
Η εφαρμογή έχει αναπτυχθεί σε [MEAN Stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle))(MongoDB, ExpressJS, AngularJS, NodeJS) το οποίο αποτελεί Full WEb Stack βασισμένο εξ ολοκλήρου σε javascript.
* Το θεμέλιο του stack είναι το NodeJS (https://nodejs.org/), το οποίο βασίζεται στην javascript Engine της Google για δημιουργία server-side applications.
* Για δίαφορες λειτουργίες στο back-end χρησιμοποιούνται modules τα οποία εγκαθίστανται με την βοήθεια του NPM (https://www.npmjs.com/) το οποίο είναι package manager.
* Το ExpressJS (http://expressjs.com/) είναι web framework του NodeJS για εύκολη δημιουργία APIs.
* Η MongoDB (https://www.mongodb.org/) είναι scalable βάση δεδομένων βασισμένη σε JSON.
* H AngularJS (https://angularjs.org/) είναι library της javascript για front-end εφαρμογές.

Απαιτήσεις
==========
Για την εκτέλεση της εφαρμογής πρέπει να έχει εγκατασταθεί το [NodeJS](https://nodejs.org/en/). Η εφαρμογή έχει αναπτυχθεί βασισμένη στην τρέχουσα τελευταία NodeJS έκδοση(v4.0.0).
Επίσης για την εγκατάσταση των components που απαιτεί η Front-End εφαρμογή χρειάζεται εγκατάσταση του node module **bower** μέσω του npm εκτελώντας την εντολή *$npm install -g bower*.

Εγκατάσταση
===========

*Σημείωση: Το σύνολο των εντολών που θα περιγραφούν παρακάτω είναι απαραίτητο να εκτελεστούν στην διαδρομή που βρίσκονται τα αρχεία της εφαρμογής π.χ. /home/user/traceoil*

1. Κάνουμε εγκατάσταση τα απαραίτητα modules που χρειάζεται η node εφαρμογή εκτελώντας στο terminal *$npm install*
2. Κάνουμε εγκατάσταση εκτελώντας τα απαίρητα components που χρειάζεται η front-end εφαρμογή στο terminal *$bower install*
3. Εκτελούμε την εντολή *$node app.js*
4. Η εφαρμογή εκτελείται από προεπιλογή στην port **8002** σε localhost.(Η προεπιλεγμένη port μπορεί να τροποποιηθεί αλλάζοντας την παράμετρο **port** στο αρχείο config/config.json)

Wiki
====
Στην κατηγορία [Wiki](https://github.com/ellak-monades-aristeias/TRACEOIL/wiki) υπάρχουν πληροφορίες σχετικά με κύριους ρόλους του μοντέλου της εφαρμογής, τις λειτουργικές προδιαγραφές καθενός ρόλου από αυτούς καθώς και ενα μέρος **Συχνών Ερωτήσεων** σχετικά με την λειτουργία της εφαρμογής(**FAQ**)

Issues
======
Τα issues που δημιουργούνται θα πρέπει να έχουν σαφές αλλά συνοπτικό Title και το πρόβλημα(η βελτίωση) που έχει παρουσιαστεί θα περιγράφεται αναλυτικά στο body
Επίσης θα πρέπει να συνοδεύονται με το κατάλληλο label:
* Για issues που αφορούν προτεινόμενη νέα εξ ολοκλήρου νέα λειτουργία στην εφαρμογή ή βελτίωση κάποιας υπάρχουσας προσθέτουμε το label **enhancement**.
* Για τυχόν προβλήματα σε λειτουργίες αναμενόμενες, σύμφωνα με την συμπεριφορά της εφαρμογής που έχει περιγραφεί προσθέτουμε το label **bug**.

Demo
====
Video με σύντομη παρουσίαση της εφαρμογής μπορείτε να βρείτε [εδώ](https://github.com/ellak-monades-aristeias/TRACEOIL/blob/master/docs/demo.mp4)
