module.exports = function(shipit) {
  require('shipit-deploy')(shipit)
  shipit.on('init', () => {
    return shipit.local(`mkdir -p ${shipit.config.workspace}`)
  })
  shipit.initConfig({
    default: {
      workspace: '/Users/hannah/.shipit',
      deployTo: '/var/www/reactivex-talk.techgirlwonder.com',
      repositoryUrl: 'git@github.com:hannahhoward/reactivex-talk.git',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      deleteOnRollback: false
    },
    production: {
      servers: 'server-url'
    }
  })

  shipit.blTask('build', () => {
    return shipit
      .local('npm install', { cwd: '/Users/hannah/.shipit' })
      .then(() => {
        return shipit.local('npm run build', { cwd: '/Users/hannah/.shipit' })
      })
  })
  shipit.on('fetched', () => {
    shipit.start('build')
  })
}
