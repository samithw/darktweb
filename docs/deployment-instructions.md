# --- PRODUCTION DEPLOYMENT WORKFLOW COMMANDS ---
# This manual summarizes the required steps for a safe, two-stage push process.
#
# Assumptions:
# 1. Manual backups (main_backup, gh_pages_backup) have been created on the target repo.
# 2. This script runs in a GitHub Actions workflow with secrets configured.
# 3. The build output folder is named <BUILD_DIR> (REPLACE THIS WITH YOUR ACTUAL FOLDER NAME, e.g., 'dist').
# --------------------------------------------------------------------------

# 1. PUSH TO SOURCE REPOSITORY (origin/main)
# Use this command outside of the deployment script to trigger the workflow.
git push origin main

# 2. PRE-DEPLOYMENT SAFETY CHECK (MANUAL BACKUPS)
# Action: Verify that backups are already created on the target repository.
# No code is executed here; this is a manual user verification step.

# 3. COMMANDS TO PUSH TO PRODUCTION (prod)
# These commands must be preceded by the necessary Git config and 'git remote add prod' setup inside your workflow.

# 3A. Push Source Code (to main branch)
# Deploys source code and history. --verbose is key for debugging the Push Protection block.
git push prod main:main --force --verbose

# 3B. Push Static Assets (to gh-pages branch)
# Deploys compiled files to the live GitHub Pages branch.
git push prod <BUILD_DIR>:gh-pages --force

# command to add a alias
git remote add prod

# --- END OF COMMANDS ---