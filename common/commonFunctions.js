module.exports = {
    calculateAge : function(dob) {
        var today = new Date();
        var birthDate = new Date(dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    },
    formatDob : function(dob)
    {
        return(new Date(dob).toLocaleDateString("en-au", {year: "numeric", month: "short",day: "numeric"})
                            .replace(/\./g,''));
    }
  };
  