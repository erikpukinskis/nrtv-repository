require("requirejs")(
  ["repository", "chai"],
  function(Repository, chai) {
    var expect = chai.expect

    var repo = new Repository('rmccue/test-repository', process.env.GITHUB_TOKEN)

    repo.list(function(paths) {
      expect(paths).to.contain('README')
      console.log(('waheeee'))

      repo.get('README', function(contents) {
        expect(contents).to.equal('This is just a test repository to work with Git commands.')
        console.log('whoooo')
      })
    })
  }
)